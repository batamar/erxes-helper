import * as bodyParser from "body-parser";
import * as cors from "cors";
import * as dotenv from "dotenv";
import * as express from "express";

dotenv.config();

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

app.get('/get-env', (req, res) => {
  const host = req.query.host;

  const { MAPPING } = process.env;

  res.json(JSON.parse(MAPPING)[host])
});

app.listen('5000', () => {
  console.log(`Helper is now running on port 5000`);
});
