import * as bodyParser from "body-parser";
import * as cors from "cors";
import * as dotenv from "dotenv";
import * as express from "express";

dotenv.config();

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

const MAPPING = {
  'localhost': {
    REACT_APP_CDN_HOST: 'http://localhost:3200',
    REACT_APP_API_URL: 'http://localhost:3300',
    REACT_APP_API_SUBSCRIPTION_URL: 'ws://localhost:3300/subscriptions'
  },
  '127.0.0.1': {
    REACT_APP_CDN_HOST: 'http://localhost:5200',
    REACT_APP_API_URL: 'http://localhost:3300',
    REACT_APP_API_SUBSCRIPTION_URL: 'ws://localhost:3300/subscriptions'
  },
}

app.get('/get-env', (req, res) => {
  const host = req.query.host;

  res.json(MAPPING[host])
});

app.listen('5000', () => {
  console.log(`Helper is now running on port 5000`);
});
