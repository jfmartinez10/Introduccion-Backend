import express from 'express';

import ENV from './utils/envLoader.js';
import logger from './utils/logger.js';
import authRouter from './routers/auth.routes.js';

const app = express();

app.use(express.json());

app.use(logger);

app.get('/', (req, res) => {
  res.send('Hello, Auth!');
});

app.use(authRouter);

app.listen(ENV.PORT, () => {
    console.log('Server is running on port: ' + ENV.PORT);
});