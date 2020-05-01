// https://blog.logrocket.com/crud-with-node-graphql-react/
// https://www.robinwieruch.de/minimal-node-js-babel-setup
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import mysql from 'mysql2';

import typeDefs from './typeDefs';
import resolvers from './resolvers';

// create the connection
const con = mysql.createConnection(
    { host: 'localhost', user: 'root', database: 'test' }
);

const {
    PORT = 5000
} = process.env;

const app = express();
const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    context: () => ({ db: con.promise() })
});

apolloServer.applyMiddleware({ app, path: '/graphql' });



app.get('/', (req, res) => {
    res.send('It is working!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});