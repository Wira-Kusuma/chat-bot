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
}

// bot get text from process and show it into chat
function botReply(text) {
    let element = document.createElement("div");
    element.className = "bot";
    element.innerHTML = `<p>${text}</p>`;
    convers.appendChild(element);
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

        userInput.value = "";
        userInput.focus();
    }, 500);
}
