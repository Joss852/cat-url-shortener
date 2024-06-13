import type { Link } from '@interfaces/short-link'

export const saveToLocalStorage = (data: Link[]) => {
  localStorage.setItem('links', JSON.stringify(data))
}

export const retrieveFromLocalStorage = (): Link[] => {
  const data = localStorage.getItem('links')
  return data ? JSON.parse(data) : []
}
