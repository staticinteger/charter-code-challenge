import { render } from "@testing-library/react";
import Purchases from "./Purchases";

test('Component renders when good data is passed in', () => {
  const testPurchases = [
    {
      id: 1,
      name: 'Test Purchase',
      amount: 100
    },
    {
      id: 2,
      name: 'Test Purchase 2',
      amount: 200
    }
    
  ];

  const purchases = render(<Purchases purchases={testPurchases} />);
  const purchasesContainer = purchases.container.querySelector('#purchases');
  const purchaseElements = purchases.container.querySelectorAll('.purchase');

  expect(purchasesContainer).toBeInTheDocument();
  expect(purchaseElements.length).toBe(2);
});

test('Component fails gracefully when an empty array is passed in', () => {
  const testPurchases = [];
  const purchases = render(<Purchases purchases={testPurchases} />);
  const purchasesContainer = purchases.container.querySelector('#purchases');
  const purchasesError = purchases.container.querySelector('.purchasesError');

  expect(purchasesContainer).toBeInTheDocument();
  expect(purchasesError).toBeInTheDocument();
  expect(purchasesError.textContent).toBe('No Purchases Found');
});

test('Component fails gracefully when null is passed in', () => {
  const testPurchases = null;
  const purchases = render(<Purchases purchases={testPurchases} />);
  const purchasesContainer = purchases.container.querySelector('#purchases');
  const purchasesError = purchases.container.querySelector('.purchasesError');

  expect(purchasesContainer).toBeInTheDocument();
  expect(purchasesError).toBeInTheDocument();
  expect(purchasesError.textContent).toBe('No Purchases Found');
});

test('Component fails gracefully when undefined is passed in', () => {
  const testPurchases = undefined;
  const purchases = render(<Purchases purchases={testPurchases} />);
  const purchasesContainer = purchases.container.querySelector('#purchases');
  const purchasesError = purchases.container.querySelector('.purchasesError');

  expect(purchasesContainer).toBeInTheDocument();
  expect(purchasesError).toBeInTheDocument();
  expect(purchasesError.textContent).toBe('No Purchases Found');
});