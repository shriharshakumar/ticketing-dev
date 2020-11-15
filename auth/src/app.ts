import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import cookieSession from 'cookie-session';

import { currentUserRouter } from './routes/current-user';
import { signinRouter } from './routes/signin';
import { signoutRouter } from './routes/signout';
import { signupRouter } from './routes/signup';
import { errorHandler } from '@hktickets/common';
import { NotFoundError } from '@hktickets/common';

const app = express();
app.set('trust proxy', 1);
app.use(json());
app.use(cookieSession({
  //name: 'session',
  signed: false,
  secure: process.env.NODE_ENV !== 'test'
}))

app.use(currentUserRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(signupRouter);

app.all('*', async (req, res) => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };