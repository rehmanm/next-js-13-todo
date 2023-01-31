import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <header className='p5 bg-blue-500'>
 
      <Link href="/" className='px-2 py-1 bg-white text-blue-500 rounded-lg m-5'>Home</Link>
      <Link href="/todos" className='px-2 py-1 bg-white text-blue-500 rounded-lg m-5'>Todos</Link>
      
    </header>
  )
}

export default Header
