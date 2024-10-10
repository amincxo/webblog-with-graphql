import { gql, useQuery } from '@apollo/client';

import Header from './components/layout/Header';

const QUERY = gql`
 query {
    authors {
        name
        }
 }
`;

function App() {
    const {data , loading} = useQuery(QUERY);
    console.log(data)
  return (
    <Header/>
  );
}

export default App;
