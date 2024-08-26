require('dotenv').config();  

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const commentRoutes = require('./routes/commentRoutes');

const app = express();
const PORT = process.env.PORT || 3040;

app.use(bodyParser.json());

const mongoURI = process.env.MONGO_URI;

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use('/api/comments', commentRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
