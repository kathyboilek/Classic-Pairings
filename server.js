const express = require('express');
const graphqlHTTP = require('express-graphql');
const mongoose = require("mongoose");
const routes = require("./routes");
const { buildSchema } = require('graphql');

let db = require("./models");



const app = express();
const PORT = 3000;

// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

//const token = 'YOUR TOKEN HERE';
//const client = createClient(token);

app.listen(3001);
console.log('Running a GraphQL API server at localhost:3001/graphql');


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/classic-pairings");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

app.get('/', (request, response) => {
  return response.json({
    msg: 'Welcome to Classic Pairings'
  })
})

// app.listen(PORT, () => {
//   console.log(`Server is running at PORT ${PORT}`);
// });