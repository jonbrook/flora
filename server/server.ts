import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import router from './router';

const app = express();

app.use(cors());
app.use(morgan('tiny'));
app.use(express.json());
app.use(router);

export default app;
