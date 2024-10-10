import React from 'react'

import { useQuery } from '@apollo/client'
import { GET_AUTHORS_INFO } from '../../graphql/queries'


function Authors() {
    const {loading , data , error} = useQuery(GET_AUTHORS_INFO);

    if(loading) return <h3>درحال بارگزاری نویسندگان</h3>

    if(error) return <h3> متاسفانه زمان گرفتن اطلاعات به مشکل خوردیم </h3>

    console.log(data)
  return (
    <div>Authors</div>
  )
}

export default Authors