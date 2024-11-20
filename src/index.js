// index.js
import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

/**
 * Cria uma instância do ApolloClient para se comunicar com o servidor GraphQL.
 * 
 * @constant
 * @type {ApolloClient}
 * @property {string} uri - A URI do servidor GraphQL.
 * @property {InMemoryCache} cache - O cache utilizado pelo ApolloClient.
 */
const client = new ApolloClient({
  uri: 'http://157.173.205.94:8081/graphql', // URI do servidor GraphQL
  cache: new InMemoryCache(), // Configuração do cache
});

const root = ReactDOM.createRoot(document.getElementById('root')); // Cria a raiz do React

root.render(
  // Provedor Apollo para fornecer o cliente Apollo a toda a aplicação
  <ApolloProvider client={client}>
    {/* BrowserRouter para gerenciar as rotas da aplicação */}
    <BrowserRouter>
      <App /> {/* Componente principal da aplicação */}
    </BrowserRouter>
  </ApolloProvider>
);

reportWebVitals(); // Função para medir a performance da aplicação