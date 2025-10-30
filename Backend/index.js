// import express from 'express';
// const app = express();
// import bodyParser from 'body-parser';
// import cors from 'cors';  
// import 'dotenv/config';
// const PORT = process.env.PORT || 8080;
// import mongoDB from './Models/db.js';
// import Authrouter from './Routes/Authrouter.js';

// mongoDB();
// app.use(bodyParser.json());
// app.use(cors());

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })


// app.use('/auth',Authrouter)
// app.listen(PORT, () => {
//   console.log(`Example app listening on port ${PORT}`)
// })
// server.js
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

// Import routes (you might need to fix their syntax too)
import authRoutes from './routes/authRoutes.js';
import protectedRoutes from './routes/protectedRoutes.js';
import propertyRoutes from './routes/Propertyroutes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api', protectedRoutes);
app.use('/api/properties', propertyRoutes);

app.get('/', (req, res) => res.send('API running'));

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,}).then(() => {
    console.log('✅ Connected to MongoDB');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
} ).catch(err => {
    console.error('❌ Failed to connect to MongoDB:', err);
});