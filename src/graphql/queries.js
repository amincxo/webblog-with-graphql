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

const GET_AUTHORS_INFO = gql`
    query {
        authors{
            id
            name
            slug
            avatar {
                url
            }
        }
    }
`;

export {GET_BLOGS_INFO , GET_AUTHORS_INFO};