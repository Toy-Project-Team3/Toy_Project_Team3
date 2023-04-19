import express from 'express';
import { myDataBase } from '../db';
import cors from 'cors';
import AuthRouter from '../router/auth';
import PostRouter from '../router/post';
export const tokenList = {};

myDataBase
  .initialize()
  .then(() => {
    console.log('DataBase has been initialized!');
  })
  .catch((err) => {
    console.error('Error during DataBase initialization:', err);
  });

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: true,
  }),
);

app.use('/auth', AuthRouter);
app.use('/post', PostRouter);

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
