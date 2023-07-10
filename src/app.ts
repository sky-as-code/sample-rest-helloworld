import * as express from 'express';
import * as logger from 'morgan';

import indexRouter from './routes';

const app = express();

app.use(logger('dev'));
app.use(express.json());

app.use('/', indexRouter);

export default app;