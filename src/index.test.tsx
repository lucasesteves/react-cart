import '@testing-library/jest-dom';
import App from './App';

describe('Initial test render page', () => {
  it('Show render App.tsx', () => {
    expect(App).toBeDefined();
  });
});
