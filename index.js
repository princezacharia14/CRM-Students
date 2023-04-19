const express = require('express');
var cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');
const authRoute = require('./routes/authRoutes');

dotenv.config();
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Mongo DB conncetion
const database = process.env.MONGOLAB_URI;
mongoose.connect(database, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log('Failed to connect to MongoDB', err));

app.set('view engine', 'ejs');

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Routes
app.use('/register', userRoutes);
app.use('/login', authRoute)


// Handle errors
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong' });
});
