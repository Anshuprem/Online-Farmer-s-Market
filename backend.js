mkdir farmers-market
cd farmers-market
npm init -y

npm install express mongoose body-parser bcryptjs jsonwebtoken dotenv
npm install -D nodemon

mkdir config controllers models routes
touch server.js .env

PORT=5000
MONGO_URI=mongodb://localhost:27017/farmersmarket
JWT_SECRET=your_jwt_secret

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// Middleware
app.use(bodyParser.json());

// Import routes
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');

// Use routes
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error(err));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
