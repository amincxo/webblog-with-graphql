import { useQuery } from '@apollo/client'
import React from 'react'
import { GET_BLOGS_INFO } from '../../graphql/queries'

function Blogs() {
    const {loading , data , error} = useQuery(GET_BLOGS_INFO);


    if(loading) return <h4>در حال بارگزاری</h4>
    if(error) return <h4>متاسفانه به ارور خوردیممم</h4>
    console.log( data )
  return (
    <div>Blogs</div>
  )
}

export default Blogs