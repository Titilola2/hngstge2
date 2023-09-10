const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const personRoutes = require('./routes/personRoutes');

const app = express();
const port = process.env.PORT || 3000;

// Connect to mongoDB
mongoose.connect('mongodb+srv://Hosteet:Trucki%402023@cluster0.5aikql0.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Check the database connection status
mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
});
mongoose.connection.on('error', (err) => {
    console.error(`MongoDB connection error: ${err}`);
});

app.use(bodyParser.json());

app.use('/api', personRoutes);

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})