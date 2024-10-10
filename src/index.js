import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloClient , ApolloProvider , InMemoryCache } from '@apollo/client';

import './index.css';
import App from './App';


const client = new ApolloClient({
    uri: "https://eu-west-2.cdn.hygraph.com/content/cm21w3htm03vj07w0450zf3l3/master",
    cache: new InMemoryCache(),
})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ApolloProvider client={client} >
        <App />
    </ApolloProvider>
);
