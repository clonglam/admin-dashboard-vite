import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from '@mui/material'
import { useRef } from 'react'

import { Todo } from '../../pages/Todos'

type Props = {
  open: boolean
  handleClose: () => void
  handleConfirm: (id: string | number, title: string) => void
  selectedTodo?: Todo
}

const TodoDialog = ({
  handleClose,
  open,
  handleConfirm,
  selectedTodo,
}: Props) => {
  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Update</DialogTitle>
      <DialogContent>
        <DialogContentText>Update the Todo Item.</DialogContentText>
        <TextField
          inputRef={inputRef}
          defaultValue={selectedTodo?.title}
          margin="dense"
          id="name"
          label="todo"
          type="text"
          fullWidth
          variant="standard"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button
          onClick={() =>
            handleConfirm(
              selectedTodo?.id || 123,
              inputRef.current ? inputRef.current.value : ''
            )
          }
        >
          Update
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default TodoDialog
