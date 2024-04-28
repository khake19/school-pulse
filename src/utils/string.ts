export const capitalizeFirstLetter = (str: string | undefined): string => {
  if (str) return str[0].toUpperCase() + str.slice(1)
  return ''
}
