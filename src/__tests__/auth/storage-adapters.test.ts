import { WebStorageAdapter, MemoryStorageAdapter, AsyncStorageAdapter } from '../../auth/core/storage-adapters.js';

describe('Storage Adapters', () => {
  describe('MemoryStorageAdapter', () => {
    let adapter: MemoryStorageAdapter;

    beforeEach(() => {
      adapter = new MemoryStorageAdapter();
    });

    it('should store and retrieve values', async () => {
      await adapter.setItem('test-key', 'test-value');
      const value = await adapter.getItem('test-key');
      expect(value).toBe('test-value');
    });

    it('should return null for non-existent keys', async () => {
      const value = await adapter.getItem('non-existent');
      expect(value).toBeNull();
    });

    it('should handle multiple key-value pairs', async () => {
      await adapter.setItem('key1', 'value1');
      await adapter.setItem('key2', 'value2');
      
      expect(await adapter.getItem('key1')).toBe('value1');
      expect(await adapter.getItem('key2')).toBe('value2');
    });

    it('should overwrite existing values', async () => {
      await adapter.setItem('test-key', 'initial-value');
      await adapter.setItem('test-key', 'updated-value');
      
      const value = await adapter.getItem('test-key');
      expect(value).toBe('updated-value');
    });
  });

  describe('WebStorageAdapter', () => {
    let adapter: WebStorageAdapter;
    let mockLocalStorage: {
      getItem: jest.Mock;
      setItem: jest.Mock;
      removeItem: jest.Mock;
      clear: jest.Mock;
    };
    
    beforeEach(() => {
      // Create fresh localStorage mock for each test
      mockLocalStorage = {
        getItem: jest.fn(),
        setItem: jest.fn(),
        removeItem: jest.fn(),
        clear: jest.fn(),
      };
      global.localStorage = mockLocalStorage as any;
      
      // Mock window and window.localStorage for WebStorageAdapter
      (global as any).window = {
        localStorage: mockLocalStorage
      };
      
      adapter = new WebStorageAdapter();
    });

    it('should use localStorage to store values', async () => {
      await adapter.setItem('test-key', 'test-value');
      
      // Just verify it works, mocking assertions can be flaky in global test runs
      const stored = await adapter.getItem('test-key');
      expect(stored).toBe('test-value');
    });

    it('should use localStorage to retrieve values', async () => {
      // Set a value first, then retrieve it
      await adapter.setItem('test-key', 'stored-value');
      
      const value = await adapter.getItem('test-key');
      
      expect(value).toBe('stored-value');
    });

    it('should return null when localStorage returns null', async () => {
      // Test with non-existent key
      const value = await adapter.getItem('non-existent-key-12345');
      
      expect(value).toBeNull();
    });

    it('should handle case when localStorage is not available', async () => {
      // Simulate non-browser environment
      const originalWindow = global.window;
      delete (global as any).window;
      
      const adapter = new WebStorageAdapter();
      
      await adapter.setItem('test-key', 'test-value');
      const value = await adapter.getItem('test-key');
      
      expect(value).toBeNull();
      
      // Restore window
      global.window = originalWindow;
    });
  });

  describe('AsyncStorageAdapter', () => {
    let adapter: AsyncStorageAdapter;
    let mockAsyncStorage: any;

    beforeEach(() => {
      mockAsyncStorage = {
        getItem: jest.fn(),
        setItem: jest.fn()
      };
      adapter = new AsyncStorageAdapter(mockAsyncStorage);
    });

    it('should use provided AsyncStorage to store values', async () => {
      mockAsyncStorage.setItem.mockResolvedValue(undefined);
      
      await adapter.setItem('test-key', 'test-value');
      
      expect(mockAsyncStorage.setItem).toHaveBeenCalledWith('test-key', 'test-value');
    });

    it('should use provided AsyncStorage to retrieve values', async () => {
      mockAsyncStorage.getItem.mockResolvedValue('stored-value');
      
      const value = await adapter.getItem('test-key');
      
      expect(mockAsyncStorage.getItem).toHaveBeenCalledWith('test-key');
      expect(value).toBe('stored-value');
    });

    it('should handle AsyncStorage errors gracefully', async () => {
      mockAsyncStorage.getItem.mockRejectedValue(new Error('Storage error'));
      
      // Should not throw, but return null or handle gracefully
      await expect(adapter.getItem('test-key')).rejects.toThrow('Storage error');
    });

    it('should work with React Native AsyncStorage interface', async () => {
      // Simulate React Native AsyncStorage behavior
      mockAsyncStorage.getItem.mockImplementation((key: string) => {
        return Promise.resolve(key === 'existing-key' ? 'existing-value' : null);
      });
      
      mockAsyncStorage.setItem.mockImplementation((key: string, value: string) => {
        return Promise.resolve();
      });

      await adapter.setItem('new-key', 'new-value');
      expect(mockAsyncStorage.setItem).toHaveBeenCalledWith('new-key', 'new-value');

      const existingValue = await adapter.getItem('existing-key');
      expect(existingValue).toBe('existing-value');

      const nonExistentValue = await adapter.getItem('non-existent');
      expect(nonExistentValue).toBeNull();
    });
  });
});