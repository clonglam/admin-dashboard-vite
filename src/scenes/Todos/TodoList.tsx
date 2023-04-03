/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Button, LinearProgress, TextField } from '@mui/material'
import axios from 'axios'
import clsx from 'clsx'
import { nanoid } from 'nanoid'
import { useEffect, useRef, useState } from 'react'

import { Todo } from '../../pages/Todos'
import TodoDialog from './TodoDialog'

const TodoList = () => {
  const ref = useRef<HTMLInputElement>(null)

  const [openDialog, setOpenDialog] = useState(false)
  const [selectedTodo, setSelectedTodo] = useState<Todo>()
  const [todos, setTodos] = useState<Todo[]>([])

  useEffect(() => {
    axios('https://jsonplaceholder.typicode.com/todos')
      .then((res) => setTodos(res.data))
      .catch((err) => {
        console.log('Error', err)
      })
  }, [])

  const updateTodoStatus = (id: number | string) => {
    console.log('id', id)
    setTodos(
      todos?.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }
  const removeTodo = (id: number | string) => {
    console.log('id', id)
    setTodos(todos?.filter((todo) => todo.id !== id))
  }

  const upadteTodo = (id: string | number, title: string) => {
    setTodos(
      todos?.map((todo) => (todo.id === id ? { ...todo, title: title } : todo))
    )
    handleClose()
  }
  const handleClickOpen = (todo: Todo) => {
    setSelectedTodo(todo)
    setOpenDialog(true)
  }

  const handleClose = () => {
    setOpenDialog(false)
  }

  const addTodo = (e: React.MouseEvent) => {
    e.preventDefault()
    if (!ref.current || !ref.current.value) return

    const newTodo = {
      id: nanoid(),
      userId: nanoid(),
      title: ref.current.value,
      completed: false,
    }
    ref.current.value = ''

    setTodos([newTodo, ...todos])
  }

  if (todos === undefined) return <LinearProgress />

  return (
    <div className="todo-list">
      {/* Todo Add Form */}
      <form className="todo-form ">
        <TextField inputRef={ref} className="todo-input" />
        <Button onClick={(e) => addTodo(e)} className="todo-add-button">
          Add
        </Button>
      </form>

      {/* Edit Todo Dialog */}
      <TodoDialog
        open={openDialog}
        handleClose={handleClose}
        handleConfirm={upadteTodo}
        selectedTodo={selectedTodo}
      />
      {/* Todo List */}
      {todos.map((todo) => (
        <div key={todo.id} className="todo-item">
          <h5
            onClick={() => updateTodoStatus(todo.id)}
            className={clsx('todo-text', todo.completed && 'completed')}
          >
            {todo.title}
          </h5>
          <div>
            <Button className="text-grey" onClick={() => handleClickOpen(todo)}>
              Edit
            </Button>

            <Button
              className="todo-remove-button"
              onClick={() => removeTodo(todo.id)}
            >
              X
            </Button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default TodoList
