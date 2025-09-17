export interface HeadersInitNocors {
  (init?: Record<string, string> | HeadersInit, subHeaders?: Record<string, string>): Headers
}

export const HeadersNoCors: HeadersInitNocors = (initHeaders = {}, subHeaders = {}) => {
  const headers = new Headers(initHeaders)

  Object.entries(subHeaders)
    .forEach(([key, value]) => {
      if (!headers.has(key))
        headers.set(key, String(value));
    });

  return headers
}