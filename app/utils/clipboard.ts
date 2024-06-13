import { toast } from 'sonner'

export const copyToClipboard = (text: string): void => {
  if (!navigator.clipboard) {
    toast('Please give permission to copy to clipboard! 🙏📋')
    return
  }

  navigator.clipboard.writeText(text).then(() => {
    toast('Link copied to clipboard! 📋😼')
  })
}