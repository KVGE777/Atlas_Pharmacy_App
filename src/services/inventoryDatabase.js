export function calculateInventoryMetrics(catalog, salesHistory) {
  let totalUnitsInStock = 0;
  let totalInventoryValue = 0;
  let totalCostValuation = 0;
  let lowStockCount = 0;
  let outOfStockCount = 0;
  let expiringSoonCount = 0;
  let expiredCount = 0;

  for (const item of catalog) {
    totalUnitsInStock += item.stockQty;
    totalInventoryValue += item.stockQty * item.sellingPrice;
    totalCostValuation += item.stockQty * item.costPrice;

    if (item.stockQty === 0) outOfStockCount += 1;
    else if (item.stockQty <= item.reorderLevel) lowStockCount += 1;

    if (item.daysUntilExpiry <= 0) expiredCount += 1;
    else if (item.daysUntilExpiry <= 90) expiringSoonCount += 1;
  }

  const todayRevenue = salesHistory
    .filter((sale) => sale.status !== 'VOIDED')
    .reduce((total, sale) => total + sale.total, 0);

  return {
    totalSkus: catalog.length,
    totalUnitsInStock,
    totalInventoryValue,
    totalCostValuation,
    lowStockCount,
    outOfStockCount,
    expiringSoonCount,
    expiredCount,
    todayRevenue
  };
}

export function updateStock(catalog, drugId, delta) {
  return catalog.map((item) =>
    item.id === drugId
      ? { ...item, stockQty: Math.max(0, item.stockQty + delta) }
      : item
  );
}

export function quarantineExpiredStock(catalog) {
  return catalog.map((item) =>
    item.daysUntilExpiry <= 0 ? { ...item, stockQty: 0 } : item
  );
}
