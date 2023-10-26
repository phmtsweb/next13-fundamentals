type ApiProps = {
  baseURL?: string
  apiPrefix?: string
}

export function createApi({ baseURL, apiPrefix = '' }: ApiProps) {
  return async function (path: string, init?: RequestInit) {
    const pathWithApiPrefix = `${apiPrefix}/${path}`.replace(/\/+/g, '/')
    const url = new URL(pathWithApiPrefix, baseURL)
    return fetch(url, init)
  }
}
