import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import {graphqlExpress,graphiqlExpress} from 'apollo-server-express';


import mongoose from 'mongoose'; //connect mongoose to mongodb db

import schema from './schema';

const app = express(); //initiate

//app.get('/',(req, res) => res.send('HEllo world!')); // calling default route,string parameter route default,second if user take sfrom we  browser
// default line runing

app.use(cors());

mongoose.connect('mongodb://localhost/graphqlserver');

const connection = mongoose.connection;

connection.once('open', () => {
	console.log('Mongodb db connection established successfully');
})

app.use('/graphiql',graphiqlExpress({
	endpointURL: '/graphql'
}));

app.use('/graphql',bodyParser.json(), graphqlExpress({schema})); //graph ql has schema object in config for parameter



app.listen(4000, () => console.log("express server running on port 4000"));

