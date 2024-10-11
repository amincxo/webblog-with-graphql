import { gql } from "@apollo/client";

const SEND_COMMENT = gql`
mutation sendComment(
    $name:String!
    $email:String!
    $text:String!
    $slug:String!
    ) {
  createComment(data: {
    email: $email  ,
     name: $name ,
     text: $text  ,
    post: {
        connect: {slug: $slug}}})
   {
    id
  }
}
`

export {SEND_COMMENT};