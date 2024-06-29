'use client'
import CatIcon from '@components/icons/cat'
import { fetchShortenedLink } from '@services/shortener'
import React, { useEffect } from 'react'

function Page() {
  useEffect(() => {
    const key = window.location.pathname.split('/')[1]
    fetchShortenedLink(key).then(data => {
      if (!data) return
      // window.location.href = data.link
    })
  }, [])

  return (
    <main className='grid items-center min-h-screen bg-gradient-to-b from-[#FFF0E6] to-[#FFF8F5] px-4 py-8'>
      <div className='flex items-center justify-center'>
        <CatIcon className='h-12 w-12 mr-2 text-[#FF8C00]' />
        <span className='text-3xl font-bold text-[#FF8C00]'>Redirecting...</span>
      </div>
    </main>
  )
}

export default Page
