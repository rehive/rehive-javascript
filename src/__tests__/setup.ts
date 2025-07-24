// Test setup file
import '@testing-library/jest-dom';
import { TextEncoder, TextDecoder } from 'util';

// Polyfill for Node.js environment
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder as any;

// Mock localStorage with proper Jest mocks
const createLocalStorageMock = () => {
  let store: { [key: string]: string } = {};
  
  const getItem = jest.fn((key: string) => store[key] || null);
  const setItem = jest.fn((key: string, value: string) => {
    store[key] = value;
  });
  const removeItem = jest.fn((key: string) => {
    delete store[key];
  });
  const clear = jest.fn(() => {
    store = {};
  });

  return { getItem, setItem, removeItem, clear };
};

global.localStorage = createLocalStorageMock() as any;

// Note: JSdom should provide window object, we only need to mock localStorage

// Mock fetch globally
global.fetch = jest.fn();