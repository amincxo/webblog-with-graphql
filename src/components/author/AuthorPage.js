import { useQuery } from '@apollo/client';
import React from 'react'
import { useParams } from 'react-router-dom'
import { GET_AUTHOR_INFO } from '../../graphql/queries';

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
    <div></div>
  )
}

export default AuthorPage