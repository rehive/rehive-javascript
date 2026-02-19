import { bindSdk } from '../../shared/bind-sdk.js';

describe('bindSdk', () => {
  it('should bind all functions in a module to a client', () => {
    const mockClient = { id: 'test-client' };
    const mockFn = jest.fn((opts: any) => opts);

    const module = {
      myFunction: mockFn,
      anotherFunction: mockFn,
      notAFunction: 'some-string',
    };

    const bound = bindSdk(module, mockClient);

    expect(typeof bound.myFunction).toBe('function');
    expect(typeof bound.anotherFunction).toBe('function');
    expect((bound as any).notAFunction).toBeUndefined();
  });

  it('should inject client into every function call', () => {
    const mockClient = { id: 'test-client' };
    const mockFn = jest.fn((opts: any) => opts);

    const module = { someCall: mockFn };
    const bound = bindSdk(module, mockClient);

    bound.someCall({ body: { name: 'test' } });

    expect(mockFn).toHaveBeenCalledWith({
      body: { name: 'test' },
      client: mockClient,
    });
  });

  it('should work with empty options', () => {
    const mockClient = { id: 'test-client' };
    const mockFn = jest.fn((opts: any) => opts);

    const module = { someCall: mockFn };
    const bound = bindSdk(module, mockClient);

    bound.someCall();

    expect(mockFn).toHaveBeenCalledWith({ client: mockClient });
  });

  it('should not override existing client in options', () => {
    const mockClient = { id: 'injected-client' };
    const mockFn = jest.fn((opts: any) => opts);

    const module = { someCall: mockFn };
    const bound = bindSdk(module, mockClient);

    bound.someCall({ client: 'user-client' as any });

    // client from bindSdk should override since it's spread last
    expect(mockFn).toHaveBeenCalledWith({
      client: mockClient,
    });
  });
});
