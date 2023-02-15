import { render } from "@testing-library/react";
import TitleBar from "./TitleBar";

test('Component renders when good data is passed in', () => {
  const testPoints = 100;
  const titleBar = render(<TitleBar points={testPoints} />);
  const titleBarElement = titleBar.container.querySelector('#titleBar');
  const titleBarPoints = titleBar.container.querySelector('.totalPoints');

  expect(titleBarElement).toBeInTheDocument();
  expect(titleBarPoints).toBeInTheDocument();
  expect(titleBarPoints.textContent).toBe(`Total Points: ${testPoints}`);
});

test('Component renders when no data is passed in', () => {
  const titleBar = render(<TitleBar />);
  const titleBarElement = titleBar.container.querySelector('#titleBar');
  const titleBarPoints = titleBar.container.querySelector('.totalPoints');

  expect(titleBarElement).toBeInTheDocument();
  expect(titleBarPoints).toBeInTheDocument();
  expect(titleBarPoints.textContent).toBe(`Total Points: 0`);
});

test('Component renders when null is passed in', () => {
  const testPoints = null;
  const titleBar = render(<TitleBar points={testPoints} />);
  const titleBarElement = titleBar.container.querySelector('#titleBar');
  const titleBarPoints = titleBar.container.querySelector('.totalPoints');

  expect(titleBarElement).toBeInTheDocument();
  expect(titleBarPoints).toBeInTheDocument();
  expect(titleBarPoints.textContent).toBe(`Total Points: 0`);
});

test('Component renders when undefined is passed in', () => {
  const testPoints = undefined;
  const titleBar = render(<TitleBar points={testPoints} />);
  const titleBarElement = titleBar.container.querySelector('#titleBar');
  const titleBarPoints = titleBar.container.querySelector('.totalPoints');

  expect(titleBarElement).toBeInTheDocument();
  expect(titleBarPoints).toBeInTheDocument();
  expect(titleBarPoints.textContent).toBe(`Total Points: 0`);
});