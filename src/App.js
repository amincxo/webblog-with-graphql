import { gql, useQuery } from '@apollo/client';

import Header from './components/layout/Header';

const QUERY = gql`
 query {
    author 
 }
`;

function App() {
    const {data , loading} = useQuery(QUERY);
    console.log({data, loading})
  return (
    <Header/>
  );
}

export default App;
