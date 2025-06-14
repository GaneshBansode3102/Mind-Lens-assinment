
# Mind Lens Worldwide - Contextual AI Chat Interface

A dynamic AI-powered contextual chat interface built using React. It intelligently renders output depending on content type — from markdown documents to live JS previews, HTML tables, and slide decks.

## 🚀 Live Demo

🔗 [Deployed on Vercel](https://your-vercel-link.vercel.app)

> _Replace the link above with your actual Vercel deployment URL._

---

## 🛠️ Features Implemented

- ✅ Collapsible left sidebar with Chat History and Login/Logout (basic layout)
- ✅ Main chat interface with real-time input and response view
- ✅ Contextual output rendering based on content type:
  - `Markdown` → rendered with `ReactMarkdown`
  - `JS Code` → live preview in sandboxed iframe
  - `HTML Tables` → parsed and previewed using `dangerouslySetInnerHTML`
  - `Slides` (markdown with `---`) → displayed via SlideViewer
- ✅ Simulated AI response for development mode
- ✅ Mobile responsive layout

---

## 🤖 AI Tool Usage

- `Simulated AI Response`: For development (mimicking AI with conditional content-based response).
- Can be easily integrated with **OpenAI GPT API** using `.env` and proper headers (disabled from commit history for security).

---

## 🐞 Known Limitations

- No backend or persistent storage for chat history
- Auth/Login is not yet implemented (UI-only)
- Slide navigation is basic (no animations, no keyboard shortcuts)

---

## 💡 Improvements (Given More Time)

- Integrate real-time GPT API response
- Add persistent chat history with localStorage or Firebase
- Enhance slide viewer with transitions and full-screen mode
- Add authentication (Google OAuth)
- Add unit tests for components

---

## 📂 Folder Structure

/contextual-chat-app
├── public/
├── src/
│ ├── components/
│ │ ├── ChatWindow.js
│ │ ├── SlideViewer.js
│ ├── App.js
│ └── style.css
├── .env (excluded from Git)
├── .gitignore
├── README.md
└── package.json

## 📦 Tech Stack

- React.js
- ReactMarkdown
- HTML/CSS
- JavaScript (Live preview via iframe)
- Vercel (deployment)
#   M i n d - L e n s - a s s i n m e n t  
 