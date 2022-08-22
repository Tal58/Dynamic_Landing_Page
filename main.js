const time = document.getElementById("time"),
    greeting = document.getElementById("greeting"),
    names = document.getElementById("names"),
    focus = document.getElementById("focus");
const showAmPm = true; 
function showTime() {
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();

    const amPM = hour >= 12 ? "PM" : "AM";
    hour = hour % 12 || 12;
    time.innerHTML = `${addZero(hour)}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${showAmPm ? amPM : ""}`;
    setTimeout(showTime, 1000);
}


function addZero(n){
    return (parseInt(n,10)< 10 ? "0": "") +n; 
}
function setBgGreet(){
    let today = new Date(),
    hour = today.getHours();

    if(hour<12){
        // document.body.style.backgroundImage = "url('../vodafone.jpg')";
        greeting.textContent = "Good Morning";

    }else if(hour<18){
        // document.body.style.backgroundImage = "url('../vodafone.jpg')";
        greeting.textContent = "Good Afternoon";
        
    }else {
        // document.body.style.backgroundImage = "url('../vodafone.jpg')";
        greeting.textContent = "Good Evening";
        document.body.style.color = "white";
        
    }
}
function getName(){
    if(localStorage.getItem("names")=== null){
        names.textContent = "[Enter Name]";
    }else {
        names.textContent = localStorage.getItem("names");
    }
}
function setName(e){
    if(e.type === "keypress") {
        //make sure enter is pressed
        if(e.which ==13 || e.keyCode == 13) {
            localStorage.setItem("names", e.target.innerText);
            names.blur();
        }else {
            localStorage.setItem("names", e.target.innerText);
        }

    }
}
function getFocus(){
    if(localStorage.getItem("focus")=== null){
        focus.textContent = "[Enter Focus]";
    }else {
        focus.textContent = localStorage.getItem("focus");
    }
}
function setFocus(e){
    if(e.type === "keypress") {
        //make sure enter is pressed
        if(e.which ==13 || e.keyCode == 13) {
            localStorage.setItem("focus", e.target.innerText);
            focus.blur();
        }else {
            localStorage.setItem("focus", e.target.innerText);
        }

    }
}


names.addEventListener("keypress",setName);
names.addEventListener("blur",setName);
focus.addEventListener("keypress",setFocus);
focus.addEventListener("blur",setFocus);


showTime();
setBgGreet();
getName();
getFocus();