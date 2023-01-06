import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import expressMongoSanitize from 'express-mongo-sanitize';

const app = express();
app.use(cors({ origin: true }));
app.use(expressMongoSanitize);

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

export default app;
