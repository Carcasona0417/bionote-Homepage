import React from 'react'
import { Box, Grid, Container, createTheme, ThemeProvider } from '@mui/material'
import Sidebar from './components/Sidebar'
import Profile from './components/Profile'

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#0f4c75' },
    secondary: { main: '#6b7c8a' },
    background: { default: '#f4f7fb', paper: '#ffffff' }
  },
  typography: {
    fontFamily: "'Inter', system-ui, Avenir, Helvetica, Arial, sans-serif",
    h3: { fontSize: '1.8rem', fontWeight: 800 },
    h6: { fontSize: '1rem', fontWeight: 700 },
    body1: { fontSize: '0.95rem' },
    body2: { fontSize: '0.87rem', color: '#6b7c8a' }
  },
  components: {
    MuiContainer: {
      defaultProps: { maxWidth: 'lg' }
    }
  }
})

export default function Root() {
  return (
    <ThemeProvider theme={theme}>
      <Box className="app-fit" sx={{ bgcolor: 'background.default' }}>
        <Container sx={{ py: { xs: 2, md: 4 } }}>
          <Grid container spacing={{ xs: 2, md: 4 }} alignItems="center">
            <Grid item xs={12} md={4}>
              <Sidebar />
            </Grid>
            <Grid item xs={12} md={8}>
              <Profile />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  )
}
