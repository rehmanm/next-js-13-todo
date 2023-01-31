import React from 'react'

type PageProps = {
    params: {
        id: number
    }
}

function MyTodo({params}: PageProps) {
  return (
    <div>
      {params.id} 
    </div>
  )
}

export default MyTodo
