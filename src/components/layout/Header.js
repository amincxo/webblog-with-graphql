import React from 'react'
import { AppBar, Container, Toolbar, Typography } from '@mui/material'
import BookIcon from "@mui/icons-material/Book"
import { useNavigate } from 'react-router-dom'


function Header() {
    const navigate = useNavigate();
  return (
    <AppBar position='sticky' >
        <Container maxWidth="lg" >
            <Toolbar>
                <Typography component="h1" variant='h5' fontWeight="bold" flex={1}> 
                    وبلاگ شخصی امین 
                </Typography>
                    <BookIcon onClick={()=> {
                    navigate("/")
                }}  />
            </Toolbar>
        </Container>
    </AppBar>
  )
}

export default Header