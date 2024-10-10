import { gql } from "@apollo/client";


const GET_BLOGS_INFO = gql`
    query {
        posts {
        id
            author {
                id
                name
                    avatar {
                        url
                    }
                }
                title
                slug
                id
                coverPhoto{
                    url
                }
        }
    }
`;

export {GET_BLOGS_INFO}