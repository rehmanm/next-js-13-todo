import { Suspense } from "react"; 
import TodoList from "./todos/TodoList";

export default function Home() {
  return (
    <div>
      <Suspense fallback={<>Loading</>}>
               {/* @ts-ignore */}
      <TodoList />
      </Suspense>

    </div>
  )
}
