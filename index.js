const express = require('express');
var cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
global.logger = require('./config/wintson');
 

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

const PORT = process.env.PORT || 4111;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

 const authRoute = require('./routes/authRoutes');
 const registerRoute = require('./routes/registerRoute');
 const coop = require('./routes/coopRoutes');
 
app.use('/login', authRoute);
app.use('/register', registerRoute);
app.use('/coop', coop);
 


// Handle errors
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong' });
});
