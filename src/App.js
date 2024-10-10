import { gql, useQuery } from '@apollo/client';
import './App.css';

const QUERY = gql`
 query {
    author {name }
 }
`;

function App() {
    const {data , loading} = useQuery(QUERY);
    console.log({data, loading})
  return (
    <h1>app</h1>
  );
}

export default App;
