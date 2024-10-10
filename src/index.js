import React from 'react';
import ReactDOM from 'react-dom/client';

import { ApolloClient , ApolloProvider , InMemoryCache } from '@apollo/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';

import './styles/index.css';
import './styles/fonts.css';
import App from './App';
import theme from './mui/theme';


const client = new ApolloClient({
    uri: process.env.REACT_APP_GRAPHCMS_URI,
    cache: new InMemoryCache(),
})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ApolloProvider client={client} >
        <BrowserRouter>
            <ThemeProvider theme={theme} >
                <App />
            </ThemeProvider>
        </BrowserRouter>
    </ApolloProvider>
);
