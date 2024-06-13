'use client'
import Header from '@components/header'
import Form from '@components/form'
import Footer from '@components/footer'
import History from '@components/history'
import ShortUrlProvider from '@contexts/shortLinks'
import { Toaster } from 'sonner'

export default function Home() {
  try {
    let previousTitle = 'Catly | Cat lovers url shortener 🐱'
    window.addEventListener('blur', () => {
      previousTitle = previousTitle
      document.title = 'Come back 😿'
    })

    window.addEventListener('focus', () => {
      document.title = previousTitle
    })
  } catch (error: any) {
    console.error('Failed to set title.', error.message)
  }

  return (
    <main className='flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-[#FFF0E6] to-[#FFF8F5] px-4 py-8'>
      <Toaster />
      <Header />
      <ShortUrlProvider>
        <Form />
        <History />
      </ShortUrlProvider>
      <Footer />
    </main>
  )
}
