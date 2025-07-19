let human = document.querySelector(".human");
let bot = document.querySelector(".bot");
let send = document.querySelector("#send");
let userInput = document.querySelector("#userInput");
let convers = document.querySelector(".convers");

// sending function rewrite from input to chat
function sending(text) {
  let element = document.createElement("div");
  element.className = "human";
  element.innerHTML = `
    <p>${text}</p>
    `;
  userInput.value = "";
  userInput.focus();
  convers.appendChild(element);
  convers.scrollTop = convers.scrollHeight;
}

// bot get text from process and show it into chat
function botReply(text) {
  let element = document.createElement("div");
  element.className = "bot";
  element.innerHTML = `<p>${text}</p>`;
  convers.appendChild(element);
  convers.scrollTop = convers.scrollHeight;
}

// when send button clicked
send.addEventListener("click", process);
// when hit enter key
document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    process();
  }
});

// input validation process
function process() {
  const msg = userInput.value.trim().toLowerCase();

  // display chat bubble , params take in input
  sending(userInput.value);
  setTimeout(() => {
    if (msg === "") {
      const responses = [
        "Your message is empty! If you're not sure what to ask, check the suggestions on the top left.",
        "Oops, you didn’t type anything! Need ideas? Open the suggestion box.",
        "No message detected. Looking for inspiration? Check the top-left suggestions.",
        "Hey, your message is blank. Try asking something or look at the suggestions!",
      ];
      botReply(responses[Math.floor(Math.random() * responses.length)]);
      userInput.value = "";
      userInput.focus();
      return;
    } else if (
      ["hi", "hello", "halo", "hola"].some((phrase) => msg.includes(phrase))
    ) {
      const greetings = [
        "Hi there! I'm your chatbot. How can I assist you today?",
        "Hello! What do you want to know? Check the suggestions above.",
        "Hey! I’m here to help. Got a question?",
        "Hola! Let’s talk! You can also explore the suggestions.",
        "Hi! Ready to chat? Try asking me anything!",
        "Hello, friend! Need help with something?",
      ];
      botReply(greetings[Math.floor(Math.random() * greetings.length)]);
    } else if (
      ["oh", "understand", "i see"].some((phrase) => msg.includes(phrase))
    ) {
      const understandingResponses = [
        "Great, glad it makes sense now!",
        "Awesome! Understanding is the first step!",
        "Finally, you got it!",
        "Yes! That’s the spirit!",
        "Nice, happy to hear you understand.",
        "Perfect, now you’re on track!",
      ];
      botReply(
        understandingResponses[
          Math.floor(Math.random() * understandingResponses.length)
        ]
      );
    } else if (
      ["+", "-", "x", "/", "equal", "=", "divided"].some((op) =>
        msg.includes(op)
      )
    ) {
      const mathResponses = [
        "Haha, I'm not a calculator 😅 Try using a calculator app!",
        "I’m more of a talker than a math genius. Try a calculator!",
        "Numbers? Not my strong suit. Go with a calculator!",
        "Sorry, I’m not programmed for math yet!",
        "You might wanna use a calculator for that one!",
        "Lol, I have no clue about math. Let’s keep it simple!",
      ];
      botReply(mathResponses[Math.floor(Math.random() * mathResponses.length)]);
    } else {
      const unknownResponses = [
        "Hmm... I don't understand that. Want to talk? Message me on WhatsApp!",
        "Sorry, I’m not programmed for that yet. Try something else or hit me up on WhatsApp!",
        "That’s outside my knowledge. Let’s talk on WhatsApp maybe?",
        "Oops, I didn’t get that. Message me on WhatsApp if you need more help!",
        "That’s not something I know. Try checking the suggestions or contact me on WhatsApp!",
        "Sorry, I’m not trained to respond to that yet. Let’s chat on WhatsApp if you want!",
      ];
      botReply(
        unknownResponses[Math.floor(Math.random() * unknownResponses.length)]
      );
    }

    // detele value in input after send message
    userInput.value = "";
    // focusing to input after send
    userInput.focus();
    convers.scrollTop = convers.scrollHeight;
  }, 500);
}

// open and close section suggestion
let burger = document.querySelector(".burger");
let close = document.querySelector(".close");
let section = document.querySelector("section");

burger.addEventListener("click", function () {
  section.classList.add("active");
});

close.addEventListener("click", function () {
  section.classList.remove("active");
});

for (let i = 1; i <= 10; i++) {
  document
    .getElementById(`suggestion${i}`)
    .addEventListener("click", function () {
      handleSuggestion(this.textContent, i);
    });
}

function handleSuggestion(textsuggest, index) {
  sending(textsuggest);
  document.querySelector("section").classList.remove("active");

  setTimeout(() => {
    let responses = {
      1: "I'm a chatbot AI created to answer all questions about my creator.",
      2: "I can explain how I was built using HTML, CSS, and JavaScript.",
      3: "Yes, I was designed to respond intelligently, but I’m still learning!",
      4: "My creator is Wira Kusuma Phandawa, a frontend developer.",
      5: "He is from Indonesia!",
      6: "he is from poor family",
      7: "He has strong skills in HTML, CSS, JavaScript, and responsive design.",
      8: "He has built multiple frontend projects, including this chatbot.",
      9: "You can contact him via GitHub or his portfolio website.",
      10: "He is currently learning advanced JavaScript and React.",
    };

    botReply(responses[index] || "I'm not sure how to respond to that yet.");
  }, 500);
}
