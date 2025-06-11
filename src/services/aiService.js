
import axios from "axios";


let isWaiting = false;

export const fetchAIResponse = async (message) => {
  if (isWaiting) return;
  isWaiting = true;
  setTimeout(() => (isWaiting = false), 3000); // wait 3 sec

  try {
    const res = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: message }]
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`
        }
      }
    );
    return res.data.choices[0].message.content;
  } catch (error) {
    console.error("OpenAI API Error:", error.response?.data || error);
    throw error;
  }
};

