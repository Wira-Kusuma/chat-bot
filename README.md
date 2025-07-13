# Chat-Bot 💬

A simple and fun JavaScript-based chatbot that mimics a real chat interface with keyword-based responses.

## 🚀 Features

- ✅ Message input validation (no empty messages)
- 💬 Custom responses to keywords like `hi`, `hello`, `oh`, `=`, `+`, etc.
- ⏱ Delayed bot response for a more natural feel
- 📜 Auto-scroll to the latest message
- 🎯 Clean and minimal chat UI

---

## 🧠 How It Works

1. **User types a message** and presses the **Send** button.
2. The bot:
   - Prevents sending empty messages.
   - Detects specific keywords and responds accordingly.
   - Defaults to a generic "I don't understand" reply if the keyword isn't recognized.
3. Both user and bot messages are added to the chat window with appropriate styling.

---

## 🛠 Technologies Used

- HTML
- CSS
- JavaScript (Vanilla)

No frameworks or libraries—just clean, raw DOM manipulation.

---

## 📂 Project Structure

Chat-bot/
├── index.html # Main chat interface
├── style.css # Styles for chat bubbles and layout
├── script.js # All logic for bot response and message handling

---

## 💡 Example Keywords

| User Input Contains     | Bot Response                          |
|-------------------------|----------------------------------------|
| `hi`, `hello`, `how are you`, `?` | "who are you?? i have boyfriend" |
| `oh`                    | "finally you understand"              |
| `+`, `-`, `x`, `/`, `equal`, `=` | "i don't know lol"               |
| Anything else           | "huh i don't understand??"            |

---

## 🧪 How to Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/Wira-Kusuma/Chat-bot.git
Open index.html in your browser.

That's it—no build tools or setup required.

✨ Ideas for Future Updates
Typing indicator for bot

Store chat history in localStorage

Support real math calculation from user input

Add timestamps to each message

Responsive design and UI enhancement

🤝 Contributing
Feel free to fork this project and improve it!
Pull requests are welcome—especially to:

Add new keyword/response pairs

Improve UI

Add smart logic with regex or NLP

📄 License
This project is open source and free to use for any purpose.

Made with 💛 by Wira Kusuma