import React, { Component } from 'react';
import express from 'express';
import graphqlHTTP from 'express-graphql';
// import logo from './logo.svg';
import Routes from './routes/routes';
//import {ApolloProvider,} from 'react-apollo';
import './App.css';

import createClient from './apollo/create-client';
import RepoInfoWithData from './react/repo-info-issues';


const app = express();
const PORT = 3000;

const schema = {};
app.use('/graphql', graphqlHTTP({
  graphiql: true,
  schema
}));

//const token = 'YOUR TOKEN HERE';
//const client = createClient(token);

app.get('/', (request, response) => {
  return response.json({
    msg: 'Welcome to Classic Pairings'
  })
})
class App extends Component {
  render() {
    return (
      <div className="App">
        <Routes />
      </div>   
    );
  }
}

app.listen(PORT, () => {
  console.log('Server is running at PORT ${PORT}');
});

export default App;
