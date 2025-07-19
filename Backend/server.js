const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const axios = require('axios');

dotenv.config();

const app = express();
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());

app.post('/api/chat', async (req, res) => {
  const { message } = req.body;
  console.log("Incoming message:", message);

  try {
    const response = await axios.post(
      'https://openrouter.ai/api/v1/chat/completions',
      {
        model: 'mistralai/mistral-7b-instruct',
        messages: [{ role: 'user', content: message }],
      },
      {
        headers: {
          'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
          'Content-Type': 'application/json',
          'HTTP-Referer': 'http://localhost:3000', // ✅ Required
          'X-Title': 'AI Chat App',                // ✅ Required
        },
      }
    );

    const reply = response.data.choices[0].message.content;
    console.log("API Response:", reply);
    res.json({ reply });

  } catch (error) {
    console.error("API Error:", error?.response?.data || error.message);
    res.status(500).json({ error: "No response from API" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
