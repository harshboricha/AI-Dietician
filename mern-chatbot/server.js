const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { exec } = require('child_process');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Endpoint to get chatbot response
app.post('/chat', (req, res) => {
  const userMessage = req.body.message;

  // Call Python script to get chatbot response
  exec(`python chatbot.py "${userMessage}"`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${stderr}`);
      return res.status(500).json({ message: 'Error in chatbot response' });
    }
    res.json({ response: stdout });
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
