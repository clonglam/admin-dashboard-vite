/* eslint-disable jsx-a11y/label-has-associated-control */
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Button,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Stack,
  TextField,
  Typography,
  useTheme,
} from '@mui/material'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'

import Layout from '../components/layoutComponents/Layout'
import { tokens } from '../styles/theme'

const GENDERS = ['Male', 'Female'] as const
const AGES = ['Ten', 'Twenty'] as const

const schema = z.object({
  name: z.string().min(3),
  gender: z.enum(GENDERS),
  age: z.enum(AGES),
  // age: z.number().min(3),
})

type FormData = z.infer<typeof schema>

const Applicationform = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  const onSubmit = (data: any) => console.log(data)

  return (
    <Layout
      section="Application From "
      description="This is an application form created by React hook form and Mui commponent.
      In this form we use Contoller to render the MUI element and pass back all the data to on submit function.
      "
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack bgcolor={colors.primary[600]} p={3} gap={2}>
          <Typography variant="h3">Application Form</Typography>

          <label htmlFor="name"> Name</label>
          <Controller
            render={({ field }) => (
              <TextField
                size="small"
                margin="dense"
                fullWidth={true}
                placeholder="User Name"
                error={errors.name ? true : false}
                helperText={errors.name && errors.name.message}
                sx={{ maxWidth: '350px' }}
                inputProps={{ style: { fontSize: '0.8rem' } }}
                FormHelperTextProps={{ style: { padding: 0 } }}
                // className="bg-white border-zinc-800 border-[1px]"

                {...field}
              />
            )}
            name="name"
            control={control}
          />

          <section>
            <label>Radio Group</label>
            <Controller
              render={({ field }) => (
                <RadioGroup aria-label="gender" {...field} defaultValue="male">
                  {GENDERS.map((gender, index) => (
                    <FormControlLabel
                      key={`gender_${index}`}
                      value={gender}
                      control={<Radio />}
                      label={gender}
                    />
                  ))}
                </RadioGroup>
              )}
              name="gender"
              control={control}
            />
          </section>

          <label>Age</label>
          <Controller
            name="age"
            control={control}
            render={({ field }) => (
              <FormControl hiddenLabel>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Age"
                  {...field}
                >
                  <MenuItem value={'Ten'}>Ten</MenuItem>
                  <MenuItem value={'Twenty'}>Twenty</MenuItem>
                </Select>
              </FormControl>
            )}
          />

          <Button type="submit" variant="contained">
            Submit
          </Button>
        </Stack>
      </form>
    </Layout>
  )
}

export default Applicationform
