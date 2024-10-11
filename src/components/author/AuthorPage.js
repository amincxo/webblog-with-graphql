import { useQuery } from '@apollo/client';
import React from 'react'
import { useParams } from 'react-router-dom'
import { GET_AUTHOR_INFO } from '../../graphql/queries';
import { Avatar, Container, Grid, Typography } from '@mui/material';

function AuthorPage() {
    const {slug} = useParams();
    
    const {loading, data , error} = useQuery(GET_AUTHOR_INFO, {
        variables:{
            slug
        }
    })
    if(loading) return<h3>در حال بارگزاری</h3>;
    if (error) return <h3>متاسفانه زمان بارگزاری دیتا به مشکل برخورد کردیم</h3>
    console.log(data)

  return (
    <Container maxWidth="lg" >
        <Grid container mt={10}  >
            <Grid item xs={12} display="flex" flexDirection="column" alignItems="center"  >
                <Avatar src={data.author.avatar.url} sx={{width:250 , height:250}} />
                <Typography component="h3" variant='h5' fontWeight={700} mt={4} >{data.author.name} </Typography>
                <Typography component="p" variant='h5' color='text.secondary' mt={2}  >
                    {data.author.field}
                </Typography>
            </Grid>
            <Grid item xs={12} >
                {data.author.description.html}
            </Grid>
        </Grid>
    </Container>
  )
}

export default AuthorPage