import express from 'express';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 5000;

const app = express();

app.get('/', (req, res) => {
  res.send({ message: 'Hello World! from Nx' });
});

app.listen(port, host, () => {
  console.log(`[ ready ] Server is running at http://${host}:${port}`);
});
