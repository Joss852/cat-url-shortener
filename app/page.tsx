import Header from '@components/header'
import Form from '@components/form'
import Footer from '@components/footer'
import History from '@components/history'

export default function Home() {
  return (
    <main className='flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-[#FFF0E6] to-[#FFF8F5] px-4 py-8'>
      <Header />
      <Form />
      <History />
      <Footer />
    </main>
  )
}
