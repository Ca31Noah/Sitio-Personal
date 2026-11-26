// Verificación del modelo de precios del cotizador.
// Uso: npm run check:pricing
import { calculatorOptions } from '../src/data/portfolioData.js';
import { computeQuote } from '../src/lib/pricing.js';

const { services, scopes, addons } = calculatorOptions;

// Invariante precisa: la tarifa implícita debe ser igual a hourlyRate × rateMultiplier
// del perfil (con tolerancia por el redondeo comercial a múltiplos de 10).
// Guarda global: ninguna tarifa puede salir del rango de mercado USD 15-60/h.
const RATE_TOLERANCE = 1;
const MARKET_FLOOR = 15;
const MARKET_CEILING = 60;

// Los complementos porcentuales (retainers) suman precio sin sumar horas, así que
// suben legítimamente la tarifa implícita. Solo se validan los que consumen horas.
const effortAddonIds = addons.filter((addon) => (addon.hours ?? 0) > 0).map((addon) => addon.id);

let failures = 0;
const fail = (message) => {
  failures += 1;
  console.error(`FAIL: ${message}`);
};

console.log('Precio base por servicio y perfil de cliente (USD · horas · días)\n');
for (const service of services) {
  const cells = scopes.map((scope) => {
    const quote = computeQuote({ service, scope, addons, selectedAddonIds: [] });
    return `$${quote.price} · ${quote.effortHours}h · ${quote.calendarDays}d`;
  });
  console.log(`${service.id.padEnd(10)} | ${cells.map((cell) => cell.padEnd(16)).join('| ')}`);
}

for (const service of services) {
  const quotes = scopes.map((scope) => computeQuote({ service, scope, addons, selectedAddonIds: [] }));

  if (!(quotes[0].price < quotes[1].price && quotes[1].price < quotes[2].price)) {
    fail(`${service.id}: el precio no crece con el perfil de cliente`);
  }
  if (!(quotes[0].calendarDays <= quotes[1].calendarDays && quotes[1].calendarDays <= quotes[2].calendarDays)) {
    fail(`${service.id}: el plazo no crece con el perfil de cliente`);
  }

  for (const quote of quotes) {
    if (!Number.isFinite(quote.price) || quote.price <= 0) fail(`${service.id}: precio inválido`);
    if (quote.calendarDays < 2) fail(`${service.id}: plazo mínimo violado`);
  }

  // El perfil corporativo debe pagar más por hora que el comercio local.
  if (!(quotes[2].appliedRate > quotes[0].appliedRate)) {
    fail(`${service.id}: la tarifa no distingue perfil de cliente`);
  }
}

// La tarifa implícita debe coincidir con la tarifa declarada del perfil.
for (const service of services) {
  for (const scope of scopes) {
    const quote = computeQuote({ service, scope, addons, selectedAddonIds: effortAddonIds });
    const rate = quote.price / quote.effortHours;
    const expected = service.hourlyRate * scope.rateMultiplier;

    if (Math.abs(rate - expected) > RATE_TOLERANCE) {
      fail(`${service.id}/${scope.id}: tarifa implícita $${rate.toFixed(1)}/h ≠ esperada $${expected.toFixed(1)}/h`);
    }
    if (rate < MARKET_FLOOR || rate > MARKET_CEILING) {
      fail(`${service.id}/${scope.id}: tarifa $${rate.toFixed(1)}/h fuera del rango de mercado`);
    }
  }
}

if (failures > 0) {
  console.error(`\n${failures} falla(s)`);
  process.exit(1);
}

console.log('\nOK: todas las invariantes pasan');
