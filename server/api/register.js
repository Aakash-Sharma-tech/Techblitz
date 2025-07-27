const express = require('express');
const router = express.Router();
const db = require('../firebaseConfig');

router.post('/register', async (req, res) => {
  const { firstName, lastName, contactNumber, email, rollNumber, domain, department, semester } = req.body;

  try {
    const docRef = db.collection('registrations').doc(); // Auto-ID
    await docRef.set({
      firstName,
      lastName,
      contactNumber,
      email,
      rollNumber,
      domain,
      department,
      semester,
      registeredAt: new Date()
    });

    res.status(200).json({ message: 'Registration successful!' });
  } catch (error) {
    console.error("Error saving registration:", error);
    res.status(500).json({ error: 'Registration failed' });
  }
});

module.exports = router;

// const db = require('../firebaseConfig');


// module.exports = async (req, res) => {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
//   res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

//   if (req.method === 'OPTIONS') {
//     return res.status(200).end(); // Handle CORS preflight
//   }

//   if (req.method !== 'POST') {
//     return res.status(405).json({ error: 'Method Not Allowed' });
//   }

//   const {
//     firstName, lastName, contactNumber,
//     email, rollNumber, domain,
//     department, semester
//   } = req.body;

//   try {
//     const docRef = db.collection('registrations').doc();
//     await docRef.set({
//       firstName,
//       lastName,
//       contactNumber,
//       email,
//       rollNumber,
//       domain,
//       department,
//       semester,
//       registeredAt: new Date()
//     });

//     res.status(200).json({ message: 'Registration successful!' });
//   } catch (error) {
//     console.error('Error saving registration:', error);
//     res.status(500).json({ error: 'Registration failed' });
//   }
// };
