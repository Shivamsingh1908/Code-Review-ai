const express = require('express');
const cors = require('cors');
const aiRoutes = require('./routes/ai.routes');

const app = express();

// ✅ Allow only your frontend to access the backend
app.use(cors({
  origin: 'http://localhost:5173',  // Vite frontend URL
  credentials: true
}));

// ✅ Middleware to parse incoming JSON
app.use(express.json());

// ✅ Test route
app.get('/', (req, res) => {
  res.send('Hello World');
});

// ✅ Mount AI routes
app.use('/ai', aiRoutes);

module.exports = app;
