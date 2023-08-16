import express, { Response } from 'express';
const app = express();

app.use(express.json());

const PORT = process.env.PORT ?? 3000;

app.get('/ping', (_, res: Response) => {
  res.send('pong!');
});

app.get('/', (_, res: Response) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
