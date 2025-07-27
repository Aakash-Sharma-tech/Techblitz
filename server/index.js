const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const registerRoute = require('./api/register');

dotenv.config();

const app = express();

// Allow only your frontend to access the backend
app.use(cors({
  origin: 'https://techblitz-by-cosmos.netlify.app',
  methods: ['GET', 'POST'],
  credentials: true
}));

app.use(express.json());

app.use('/api', register);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

// const express = require('express');
// const cors = require('cors');
// const dotenv = require('dotenv');
// const registerRoute = require('./api/register');

// dotenv.config();

// const app = express();
// app.use(cors());
// app.use(express.json());

// app.use('/api', registerRoute); // POST /api/register

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`🚀 Server running on http://localhost:${PORT}`);
// });
