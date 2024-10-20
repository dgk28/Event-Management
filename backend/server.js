 
const express = require('express');

const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');

const eventRoutes = require('./routes/eventRoutes');
const db = require('./config/db');
const User = require('./models/userModel');
const app = express();


const cors = require('cors');

// Add this line before your routes
app.use(cors());
// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/events', eventRoutes);

const PORT = process.env.PORT || 5000;

mongoose.connect(db.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
  .catch(err => console.error(err));
  /*app.get('/api/users', async (req, res) => {
    try {
      const users = await User.find(); // Fetch all users from the DB
      res.json(users);
    } catch (err) {
      res.status(500).json({ message: 'Error fetching users' });
    }
  });*/
