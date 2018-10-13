const express = require('express');
const graphqlHTTP = require('express-graphql');

const { buildSchema } = require('graphql');
// const Routes = require('./routes/routes');

const app = express();
const PORT = 3001;

const schema = buildSchema(`
  type Query {
    hello: String
  }
`);
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

app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
});