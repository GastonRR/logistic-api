import express, { Response } from 'express';
import ordersRouter from 'routes/orders';
import reportRouter from 'routes/reports';
import cors from 'cors';
const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT ?? 3000;

app.get('/ping', (_, res: Response) => {
  res.send('pong!');
});

app.use('/orders', ordersRouter);
app.use('/reports', reportRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
