/**
 * Builds a query string from an object, encoding arrays as repeated params with [] (e.g., teacherId[]=1&teacherId[]=2).
 *
 * @param sanitizedParams - The object containing query parameters.
 * @returns Query string (e.g., teacherId[]=1&teacherId[]=2&status=active)
 */
export function buildQueryParams(sanitizedParams: Record<string, unknown>): string {
  const params = new URLSearchParams()
  for (const [key, value] of Object.entries(sanitizedParams)) {
    if (Array.isArray(value)) {
      value.forEach((v) => params.append(`${key}[]`, v))
    } else if (value !== undefined && value !== null) {
      params.set(key, String(value))
    }
  }

  return params.toString()
}
