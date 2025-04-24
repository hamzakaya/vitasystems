import { STORAGE_TOKEN_KEY } from './constants'
import StorageService from '../common/utils/storage'

export default class AuthManager {
  private _token: string | null = null

  constructor() {
    this._token = StorageService.get<string>(STORAGE_TOKEN_KEY)
  }

  get token(): string | null {
    return this._token
  }

  set token(value: string | null) {
    this._token = value
    if (value) {
      StorageService.set(STORAGE_TOKEN_KEY, value)
    } else {
      StorageService.remove(STORAGE_TOKEN_KEY)
    }
  }

  get isAuthenticated(): boolean {
    return !!this._token
  }

  logout(): void {
    this.token = null
  }
}
