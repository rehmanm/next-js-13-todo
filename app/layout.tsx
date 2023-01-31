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
        <div className='flex flex-col h-screen justify-between'>
        <Header />
        {children}
        <Footer />
        </div>
        </body>
    </html>
  )
}
