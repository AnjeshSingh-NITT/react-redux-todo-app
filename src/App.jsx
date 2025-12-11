import './App.css'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'
import { useSelector } from 'react-redux'

function App() {

  const todos = useSelector((state) => state.todos.todos);

  return (
    <div className="bg-linear-to-br from-[#0a0f2d] to-[#1b2b50] min-h-screen py-10 px-4">
      <div className="w-full max-w-2xl mx-auto backdrop-blur-lg bg-white/10 shadow-2xl rounded-2xl px-6 py-6 border border-white/20">
        
        <h1 className="text-4xl font-extrabold text-center mb-10 mt-2 text-blue-300 tracking-wide drop-shadow-lg">
          Manage Your Todos
        </h1>

        <div className="mb-6">
          <TodoForm />
        </div>

        <div className="flex flex-col gap-y-4">
          {todos.map((todo) => (
            <div key={todo.id} className="w-full">
              <TodoItem todo={todo} />
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default App
