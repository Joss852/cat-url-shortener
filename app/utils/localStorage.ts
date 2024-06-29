export const saveToSessionStorage = (data: string[]) => {
  sessionStorage.setItem('links', JSON.stringify(data))
}

export const retrieveFromSessionStorage = (): string[] => {
  if (typeof localStorage === 'undefined') return []

  const data = sessionStorage.getItem('links')
  return data ? JSON.parse(data) : []
}
