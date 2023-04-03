import Layout from '../components/layoutComponents/Layout'
import TodoList from '../scenes/Todos/TodoList'

export type Todo = {
  userId: number | string
  id: number | string
  title: string
  completed: boolean
}

const Todos = () => {
  // Access the client

  return (
    <Layout
      section="Todos"
      description="Using Mui for styling, a basic fetching and todo list."
    >
      <TodoList />
    </Layout>
  )
}

export default Todos
