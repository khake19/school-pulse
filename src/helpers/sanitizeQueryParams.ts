const sanitizeQueryParams = (params: Record<string, any>) =>
  Object.fromEntries(
    Object.entries(params)
      .filter(([_, value]) => value !== undefined && value !== null && value !== '')
      .map(([key, value]) => [key, String(value)])
  )

export default sanitizeQueryParams
