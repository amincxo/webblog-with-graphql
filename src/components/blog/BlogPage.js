import { useQuery } from '@apollo/client';
import React from 'react'
import { useParams } from 'react-router-dom'
import { GET_POST_INFO } from '../../graphql/queries';
import Loader from '../shared/Loader';

function BlogPage() {
    const {slug} = useParams();

    const {loading , data , error} = useQuery(GET_POST_INFO , {
        variables:{
            slug
        }
    })

    if(loading) return <Loader />
    if(error) return <h4>متاسفانه به ارور خوردیممم</h4>
    console.log(data)
  return (
    <div>BlogPage</div>
  )
}

export default BlogPage