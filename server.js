const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public')); // Ini penting agar index.html bisa diakses

// Route untuk menerima form
app.post('/submit', (req, res) => {
  const { nama, prodi } = req.body;
  res.json({ message: `Halo ${nama}, prodi kamu adalah ${prodi}.` });
});

// Menjalankan server
app.listen(3000, () => {
  console.log('Server sedang berjalan pada http://localhost:3000');
});
