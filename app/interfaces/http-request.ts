import type { Link } from '@interfaces/short-link'

export interface GlobalResponse {
  status: string
  ok: boolean
  code: number
  data: Link
}
