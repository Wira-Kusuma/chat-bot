let human = document.querySelector(".human");
let bot = document.querySelector(".bot");
let send = document.querySelector("#send");
let userInput = document.querySelector("#userInput");
let convers = document.querySelector(".convers");

// sending function rewrite from input to chat
function sending() {
    let element = document.createElement("div");
    element.className = "human";
    element.innerHTML = `
    <p>${userInput.value}</p>
    `;
    userInput.value="";
    userInput.focus();
    convers.appendChild(element);
    convers.scrollTop = convers.scrollHeight;

}

function sendingre(text) {
    let element = document.createElement("div");
    element.className = "human";
    element.innerHTML = `
    <p>${text}</p>
    `;
    userInput.value="";
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
document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        process();
    }
});

// input validation process
function process() {
    const msg = userInput.value.trim().toLowerCase();
    sending();
    setTimeout(() => {
        if (msg === "") {
            botReply("you massage are empty, if you don't know what to ask, open suggestion in top left");
            userInput.value = "";
            userInput.focus();
            return;
        }
        
        else if (["hi", "hello", "halo", "hola"].some(phrase => msg.includes(phrase))) {
            botReply("hi im chatbot, what do you want to ask, open the suggestion in top left.");
        } 
        
        else if ((["oh", "understand", "i see"]).some(phrase => msg.includes(phrase))) {
            botReply("finally you understand");
        } 
        
        else if (["+", "-", "x", "/", "equal", "=", "divided"].some(op => msg.includes(op))) {
            botReply("i don't know lol, use calculator");
        } 
        
        else {
            botReply("sorry your input doen't in my program, need to talk? chat me in whatsapp  ");
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

burger.addEventListener("click", function() {
    section.classList.add("active");
});

close.addEventListener("click", function() {
    section.classList.remove("active");
});


for (let i = 1; i <= 10; i++) {
    document.getElementById(`suggestion${i}`)
        .addEventListener("click", function () {
            handleSuggestion(this.textContent, i);
        });
}

function handleSuggestion(textsuggest, index) {
    sendingre(textsuggest);
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
            10: "He is currently learning advanced JavaScript and React."
        };

        botReply(responses[index] || "I'm not sure how to respond to that yet.");
    }, 500);
}
