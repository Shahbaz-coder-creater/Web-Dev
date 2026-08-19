import OpenAI from "openai";
import dotenv from "dotenv";
import express from "express";

dotenv.config();
const app = express();

app.use(express.json());

const client = new OpenAI({
  apiKey: process.env.API_KEY, 
  baseURL: "https://api.groq.com/openai/v1", // Groq base URL
});

app.post("/users", async (req, res) => {
  try {
    const { input } = req.body;
    if (!input) {
      return res.status(400).json({ error: "Input is required" });
    }

    const response = await client.chat.completions.create({
  model: "openai/gpt-oss-120b",
  messages: [
    { 
      role: "system", 
      content: "Provide responses in clear, simple paragraphs. Avoid markdown tables or excessive formatting." 
    },
    { role: "user", content: input }
  ],
});

    res.json({
      result: response.choices[0].message.content,
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});