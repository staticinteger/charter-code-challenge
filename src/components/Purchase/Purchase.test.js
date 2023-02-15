import { render } from "@testing-library/react";
import Purchase from "./Purchase";

test('Component renders when good data is passed in', () => {
  const testPurchase = {
    name: 'Test Purchase',
    amount: 100
  };

  const purchase = render(<Purchase purchase={testPurchase} />);

  const purchaseElement = purchase.container.querySelector('.purchase');
  const purchaseName = purchase.container.querySelector('.purchaseName');
  const purchaseAmount = purchase.container.querySelector('.purchaseAmount'); 

  expect(purchaseElement).toBeInTheDocument();
  expect(purchaseName).toBeInTheDocument();
  expect(purchaseAmount).toBeInTheDocument();

  expect(purchaseName.textContent).toBe(testPurchase.name);
  expect(purchaseAmount.textContent).toBe(`$${testPurchase.amount} (50 Points)`);
});

test('Component fails gracefully when an empty object is passed in', () => {
  const testPurchase = {};
  const purchase = render(<Purchase purchase={testPurchase} />);
  const purchaseElement = purchase.container.querySelector('.purchase');
  const purchaseError = purchase.container.querySelector('.purchaseError');

  expect(purchaseElement).toBeInTheDocument();
  expect(purchaseError).toBeInTheDocument();
  expect(purchaseError.textContent).toBe('Invalid Purchase Data');
});

test('Component fails gracefully when null is passed in', () => {
  const testPurchase = null;
  const purchase = render(<Purchase purchase={testPurchase} />);
  const purchaseElement = purchase.container.querySelector('.purchase');
  const purchaseError = purchase.container.querySelector('.purchaseError');

  expect(purchaseElement).toBeInTheDocument();
  expect(purchaseError).toBeInTheDocument();
  expect(purchaseError.textContent).toBe('Invalid Purchase Data');
});

test('Component fails gracefully when undefined is passed in', () => {
  const testPurchase = undefined;
  const purchase = render(<Purchase purchase={testPurchase} />);
  const purchaseElement = purchase.container.querySelector('.purchase');
  const purchaseError = purchase.container.querySelector('.purchaseError');

  expect(purchaseElement).toBeInTheDocument();
  expect(purchaseError).toBeInTheDocument();
  expect(purchaseError.textContent).toBe('Invalid Purchase Data');
});