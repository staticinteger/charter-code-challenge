import purchases from '../data/purchase-data';

// Note that this is a very simple "API" service.
// So we aren't going to worry about writing tests for this.
export function getPurchases() {
  return purchases;
}