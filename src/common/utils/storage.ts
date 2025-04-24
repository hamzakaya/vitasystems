export default class StorageService {
  static get<T>(key: string): T | null {
    const value = localStorage.getItem(key)
    if (!value) return null
    try {
      return JSON.parse(value) as T
    } catch {
      return (value as unknown) as T
    }
  }

  static set(key: string, value: any): void {
    if (typeof value === 'object') {
      localStorage.setItem(key, JSON.stringify(value))
    } else {
      localStorage.setItem(key, value)
    }
  }

  static remove(key: string): void {
    localStorage.removeItem(key)
  }
}
