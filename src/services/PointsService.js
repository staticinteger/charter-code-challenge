
export function calculatePointsOnPurchase(purchase) {
  // Make sure we have a valid purchase object and that it has an amount
  // otherwise return 0 points.
  if (!purchase || !purchase.amount) {
    return 0;
  }

  let points = 0;

  // Round up to the nearest dollar.
  const amount = Math.ceil(purchase.amount);

  // Provide 1 point for every dollar spent between $50 and $100.
  if (amount > 50 && amount <= 100) {
    points += (amount - 50);
  }

  // Provide 2 points for every dollar spent over $100.
  // Since the above statement will only be true if amount < 100
  // and the below statement will only be true if amount > 100
  // we can safely assume we have at least 50 points and then add the
  // additional points for the amount over 100.
  if (amount > 100) {
    points += 50;
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

  // Loop through each purchase and calculate the points for that purchase,
  // accumulating the total points using reduce.
  return purchases.reduce((total, purchase) => {
    return total + calculatePointsOnPurchase(purchase);
  }, 0);
}