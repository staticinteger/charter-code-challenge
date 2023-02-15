import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const app = render(<App />);
  const titleBar = app.container.querySelector('#titleBar');
  const purchasesList = app.container.querySelector('#purchases');
  
  expect(titleBar).toBeInTheDocument();
  expect(purchasesList).toBeInTheDocument();
});
