import React from 'react'
import Footer from './Footer'
import './globals.css'
import Header from './Header'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <div className='h-screen flex flex-col'>
        <Header />
        <main className='flex flex-1 overflow-auto'>{children}</main>
        <Footer />
        </div>
        </body>
    </html>
  )
}
