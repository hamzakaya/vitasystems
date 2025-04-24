import AuthManager from './auth-manager'
import { ApiErrorShape, ApiResponse } from './types'

export interface RequestOptions extends Omit<RequestInit, 'headers'> {
  headers?: Record<string, string>
  includeAuth?: boolean
}

export class HttpClient {
  private readonly baseUrl: string
  private readonly authManager: AuthManager

  constructor(baseUrl: string, authManager: AuthManager) {
    this.baseUrl = baseUrl
    this.authManager = authManager
  }

  private getHeaders(includeAuth: boolean = true): Record<string, string> {
    const headers: Record<string, string> = {
      Accept: 'application/json',
    }

    if (includeAuth && this.authManager.token) {
      headers['Authorization'] = `Bearer ${this.authManager.token}`
    }

    return headers
  }

  async request<T>(endpoint: string, options: RequestOptions = {}): Promise<T> {
    const { includeAuth = true, headers = {}, ...restOptions } = options

    const url = `${this.baseUrl}/${endpoint}`
    const finalHeaders = {
      ...this.getHeaders(includeAuth),
      ...headers,
    }

    const response = await fetch(url, {
      ...restOptions,
      headers: finalHeaders,
    })

    const json = (await response.json().catch(() => null)) as ApiResponse<
      T
    > | null

    if (!response.ok) {
      if (response.status === 401) {
        this.authManager.logout()
      }

      throw {
        message: json?.data ? json.data : 'Beklenmeyen bir hata oluştu.',
        status: response.status,
        errors: json?.errors ?? null,
        raw: json,
      } as ApiErrorShape
    }

    return json?.data as T
  }
}
