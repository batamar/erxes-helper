import * as bodyParser from "body-parser";
import * as cors from "cors";
import * as dotenv from "dotenv";
import * as express from "express";

dotenv.config();

const { PORT, MAIN_APP_DOMAIN, MAPPING } = process.env;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors({
  origin: MAIN_APP_DOMAIN,
}));

app.post('/get-env', (req, res) => {
  const mapping = JSON.parse(MAPPING);

  if (!mapping[req.hostname]) {
    return res.json({ status: 'invalid config' });
  }

  res.json(mapping[req.hostname])
});

app.listen(PORT, () => {
  console.log(`Helper is now running on port ${PORT}`);
});
