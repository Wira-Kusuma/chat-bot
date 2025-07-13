let human = document.querySelector(".human");
let bot = document.querySelector(".bot");
let send = document.querySelector("button");
let userInput = document.querySelector("#userInput");
let convers = document.querySelector(".convers");

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

function botReply(text) {
    let element = document.createElement("div");
    element.className = "bot";
    element.innerHTML = `<p>${text}</p>`;
    convers.appendChild(element);
}


send.addEventListener("click", function() {
    const msg = userInput.value.trim().toLowerCase();
    sending();
    setTimeout(() => {
        if (msg === "") {
            botReply("don't send empty message");
            userInput.value = "";
            userInput.focus();
            return;
        }
        
        else if (["hi", "hello", "how are you", "?"].some(phrase => msg.includes(phrase))) {
            botReply("who are you?? i have boyfriend");
        } 
        
        else if ((["oh", "understand", "i see"]).some(phrase => msg.includes(phrase))) {
            botReply("finally you understand");
        } 
        
        else if (["+", "-", "x", "/", "equal", "=", "divided"].some(op => msg.includes(op))) {
            botReply("i don't know lol, use calculator");
        } 
        
        else {
            botReply("huh i don't understand??");
        }

        userInput.value = "";
        userInput.focus();
    }, 500);
});

