import { useQuery } from "@apollo/client"
import { GET_BLUG_COMMENTS } from "../../graphql/queries"

function Comments({slug}) {

    const {loading , data  } = useQuery(GET_BLUG_COMMENTS, {
        variables:{
            slug
        }
    })
    console.log(loading , data)
  return (
    <div>Comments</div>
  )
}

export default Comments