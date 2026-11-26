// Pricing model for the service calculator.
//
// Two independent axes:
//   1. Scope    -> how much work (hoursMultiplier)
//   2. Segment  -> who is paying (rateMultiplier)
//
//   price        = (baseHours + addonHours) * (hourlyRate * rateMultiplier) + percent addons
//   calendarDays = ceil((effortHours / 8) * calendarFactor) + coordination
//
// The implied hourly rate varies per segment ON PURPOSE: a local shop and a
// corporate client do not buy the same thing, even when the deliverable looks
// similar (compliance, procurement, risk, payment capacity).

const HOURS_PER_WORKDAY = 8;
const COORDINATION_DAYS = 2;

const roundToTen = (value) => Math.round(value / 10) * 10;

/**
 * @param {object} params
 * @param {{baseHours:number, hourlyRate:number}} params.service
 * @param {{hoursMultiplier:number, calendarFactor:number}} params.scope
 * @param {Array<{id:string, hours?:number, percentOfBase?:number}>} params.addons
 * @param {string[]} params.selectedAddonIds
 */
export function computeQuote({ service, scope, addons, selectedAddonIds = [] }) {
  const scopeFactor = scope.hoursMultiplier;

  const baseHours = service.baseHours * scopeFactor;
  // La tarifa efectiva depende del perfil de cliente (segmento), no solo del servicio.
  // Mismo entregable para una ferretería y para una petrolera no vale lo mismo:
  // cambia el costo de venta, el riesgo, el cumplimiento y la capacidad de pago.
  const appliedRate = service.hourlyRate * scope.rateMultiplier;
  const basePrice = roundToTen(baseHours * appliedRate);

  const addonHours = {};
  const addonPrices = {};

  for (const addon of addons) {
    const hours = (addon.hours ?? 0) * scopeFactor;
    addonHours[addon.id] = Math.round(hours);
    addonPrices[addon.id] = roundToTen(
      hours * appliedRate + (addon.percentOfBase ?? 0) * basePrice
    );
  }

  const selected = addons.filter((addon) => selectedAddonIds.includes(addon.id));
  const selectedHours = selected.reduce((total, addon) => total + addonHours[addon.id], 0);
  const selectedPrice = selected.reduce((total, addon) => total + addonPrices[addon.id], 0);

  const effortHours = Math.round(baseHours) + selectedHours;
  const calendarDays = Math.max(
    2,
    Math.ceil((effortHours / HOURS_PER_WORKDAY) * scope.calendarFactor) + COORDINATION_DAYS
  );

  return {
    price: basePrice + selectedPrice,
    basePrice,
    appliedRate,
    effortHours,
    calendarDays,
    addonHours,
    addonPrices,
  };
}
