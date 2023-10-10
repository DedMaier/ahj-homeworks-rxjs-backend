import cors from "cors";
import express from 'express';
import router from './routes/index.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use('', router);

const PORT = process.env.PORT || 7070;

const start = async () => {
  try {
    app.listen(PORT, () => console.log(`Server started on PORT: ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();
