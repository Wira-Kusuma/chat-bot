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

send.addEventListener("click", function() {
    if(userInput.value.trim() === "" ){
        let element = document.createElement("div");
        element.className = "bot";
        element.innerHTML = `
        <p>don't send empty message</p>
        `;
        userInput.value="";
        userInput.focus();
        convers.appendChild(element);
    }
    else if (userInput.value.includes("hi") || userInput.value.includes("hello") || userInput.value.includes("how are you") ||userInput.value.includes("?")){
        sending();
        setTimeout(() => {
            let element = document.createElement("div");
            element.className = "bot";
            element.innerHTML = `
            <p>who are you?? i have boyfriend</p>
            `;
            userInput.value="";
            userInput.focus();
            convers.appendChild(element);
        }, 500);
        
    }
    else if (userInput.value.includes("oh")){
        sending();
        setTimeout(() => {
            let element = document.createElement("div");
            element.className = "bot";
            element.innerHTML = `
            <p>finally you understand</p>
            `;
            userInput.value="";
            userInput.focus();
            convers.appendChild(element);
        }, 500);
        
    }
    else if (userInput.value.includes("+") || userInput.value.includes("-") || userInput.value.includes("x") || userInput.value.includes("/") || userInput.value.includes("equal") || userInput.value.includes("=")){
        sending();
        setTimeout(() => {
            let element = document.createElement("div");
            element.className = "bot";
            element.innerHTML = `
            <p>i don't know lol</p>
            `;
            userInput.value="";
            userInput.focus();
            convers.appendChild(element);
        }, 500);
        
    }
    else {
        sending();
        setTimeout(() => {
            let element = document.createElement("div");
            element.className = "bot";
            element.innerHTML = `
            <p>huh i don't understand??</p>
            `;
            userInput.value="";
            userInput.focus();
            convers.appendChild(element);
        }, 500);
    }
});

