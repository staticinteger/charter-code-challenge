
export function calculatePointsOnPurchase(purchase) {
  // Make sure we have a valid purchase object and that it has an amount
  // otherwise return 0 points.
  if (!purchase || !purchase.amount) {
    return 0;
  }

  let points = 0;

  // Round up to the nearest dollar.
  const amount = Math.ceil(purchase.amount);

  if (amount > 50 && amount <= 100) {
    points += (amount - 50);
  }

  if (amount > 100) {
    points += (amount - 100) * 2;
  }

  return points;
}

export function calculateTotalPoints(purchases) {
  // Make sure we have a valid purchases array and that it has at least one purchase.
  // Otherwise return 0 points.
  if (!purchases || !purchases.length) {
    return 0;
  }

  return purchases.reduce((total, purchase) => {
    return total + calculatePointsOnPurchase(purchase);
  }, 0);
}