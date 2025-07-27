const { Firestore } = require('@google-cloud/firestore');
require("dotenv").config();

const db = new Firestore({
  projectId: process.env.FIREBASE_PROJECT_ID,
  credentials: {
    client_email: process.env.FIREBASE_CLIENT_EMAIL,
    private_key: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
  },
  preferRest: true // ✅ Forces REST instead of gRPC — fixes Render deployment error
});

module.exports = db;
