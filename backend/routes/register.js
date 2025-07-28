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
