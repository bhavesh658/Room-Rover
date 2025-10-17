import express from 'express';
const app = express();
import bodyParser from 'body-parser';
import cors from 'cors';  
import 'dotenv/config';
const PORT = process.env.PORT || 8080;
import mongoDB from './Models/db.js';
import Authrouter from './Routes/Authrouter.js';

mongoDB();
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.use('/auth',Authrouter)
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})