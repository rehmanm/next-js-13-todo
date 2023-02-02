
import React from 'react'
import { notFound } from 'next/navigation'

type PageProps = {
    params: {
      todoId: string
    }
}

async function getTodo(todoId: string){
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`, {next: {revalidate: 60}})
  const todo: Todo = await res.json();
  return todo;
}
async function MyTodo({params}: PageProps) {

  const todo: Todo = await getTodo(params.todoId.toString());

  if (!todo.id) {
    return notFound();
  }

  return (
    <div className='p-10 bg-yellow-100 shadow-lg border-2 m-2 rounded-sm h-40 min-w-fit'>
      <p>
        #{todo.id} - {todo.title}
      </p>
      <p>
        Completed: {todo.completed ?"Yes" : "No"}
      </p>

      <p className='border-t border-black mt-5 text-right'>
        By User {todo.userId}
      </p>
      

    </div>
  )
}

export default MyTodo;

export async function generateStaticParams(){

  const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
  const todos: Todo[] = await res.json();

  const trimmedTodos = todos.splice(0, 10);

  return trimmedTodos.map(todo => ({
    todoId: todo.id.toString()  
  }))

}
