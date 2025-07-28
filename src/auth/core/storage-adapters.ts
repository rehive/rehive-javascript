import type { StorageAdapter } from '../types/index.js';

export class WebStorageAdapter implements StorageAdapter {
  async getItem(key: string): Promise<string | null> {
    if (typeof window !== 'undefined' && window.localStorage) {
      return window.localStorage.getItem(key);
    }
    return null;
  }

  async setItem(key: string, value: string): Promise<void> {
    if (typeof window !== 'undefined' && window.localStorage) {
      window.localStorage.setItem(key, value);
    }
  }

  async removeItem(key: string): Promise<void> {
    if (typeof window !== 'undefined' && window.localStorage) {
      window.localStorage.removeItem(key);
    }
  }
}

export class MemoryStorageAdapter implements StorageAdapter {
  private storage = new Map<string, string>();

  async getItem(key: string): Promise<string | null> {
    return this.storage.get(key) || null;
  }

  async setItem(key: string, value: string): Promise<void> {
    this.storage.set(key, value);
  }

  async removeItem(key: string): Promise<void> {
    this.storage.delete(key);
  }
}

export class AsyncStorageAdapter implements StorageAdapter {
  private asyncStorage: any;

  constructor(asyncStorage: any) {
    this.asyncStorage = asyncStorage;
  }

  async getItem(key: string): Promise<string | null> {
    return this.asyncStorage.getItem(key);
  }

  async setItem(key: string, value: string): Promise<void> {
    return this.asyncStorage.setItem(key, value);
  }

  async removeItem(key: string): Promise<void> {
    return this.asyncStorage.removeItem(key);
  }
}