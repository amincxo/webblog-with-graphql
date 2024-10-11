import React from 'react'
import { useQuery } from '@apollo/client'
import { Grid } from '@mui/material';
import { GET_BLOGS_INFO } from '../../graphql/queries'
import CardEl from '../shared/CardEl';
import Loader from '../shared/Loader';

function Blogs() {
    const {loading , data , error} = useQuery(GET_BLOGS_INFO);


    if(loading) return <Loader />
    if(error) return <h4>متاسفانه به ارور خوردیممم</h4>
    console.log( data )
  return (
    <Grid container spacing={2} >
        {data.posts.map((post) => (
        <Grid item xs={12} sm={6} md={4} key={post.id} >
            <CardEl {...post} />
        </Grid>
        )) }
    </Grid>
  )
}

export default Blogs