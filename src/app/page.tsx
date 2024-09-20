import { Container } from '@mui/material'
import { Login } from './_login/page'

export default function Home () {
  return (
    <Container sx={{
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
      }}>
        <Login />
    </Container>

      )
}