import { MongoClient } from 'mongodb';
import nextConnect from 'next-connect';

//connects database
const client = new MongoClient('mongodb+srv://Admin:JZVuDSgevA7qXLNa@solid-goose-sqd76.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function database(req, res, next) {
  if (!client.isConnected()) await client.connect();
  req.dbClient = client;
  req.db = client.db('daily');
  return next();
}

const middleware = nextConnect();

middleware.use(database);

export default middleware;