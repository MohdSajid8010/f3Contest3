
let formEl = document.querySelector("form");
let nameEl = document.querySelector("#name");
let emailEl = document.querySelector("#email");
let passEl = document.querySelector("#pass");
let cpassEl = document.querySelector("#cpass");
let errorEl = document.querySelector(".error");
let succesEl = document.querySelector(".succes");

let sign_upEl = document.querySelector("#sign_up");
let profileEl = document.querySelector("#profile");



let user_obj = {}
formEl.addEventListener("submit", (e) => {
    e.preventDefault();
    if (nameEl.value == "" || emailEl.value == "" || passEl.value == ""||cpassEl.value=="") {
        errorEl.innerHTML = "Error : All the fields are mandatory"
        return
    }
    if (passEl.value != cpassEl.value) {
        errorEl.innerHTML = "password not match!"
        passEl.type = "text"
        cpassEl.type = "text"
        return

    } else {
        passEl.type = "password"
        cpassEl.type = "password"
    }


    user_obj = {
        name: nameEl.value,
        email: emailEl.value,
        password: passEl.value,
        accesstoken: generateToken()
    }

    localStorage.setItem("user_obj", JSON.stringify(user_obj));//set user_obj in localStorage
    succesEl.innerHTML = " Successfully Signed Up!"
    errorEl.innerHTML = ""

    location.href = "./profileFolder/profile.html";
    formEl.reset();//reset the form
})

//function to generate random 16byte string/token
function generateToken() {
    let token = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz!@#$^&*/_?";
    for (let i = 0; i < 16; i++) {
        token = token + str[Math.floor(Math.random() * str.length)];
    }
    return token;
}


profileEl.addEventListener("click", () => {
    let user_obj = JSON.parse(localStorage.getItem("user_obj"))
    if (!user_obj || !user_obj.accesstoken) {
        alert("you have to sign up first to see profile!")
        location.href = "./index.html"
    }
    else {
        alert("you have profile")
        location.href = "./profileFolder/profile.html"

    }
})

sign_upEl.addEventListener("click", () => {
    let user_obj = JSON.parse(localStorage.getItem("user_obj"));
    if (!user_obj || !user_obj.accesstoken) {
        alert("you have to sign up first");
        location.href="./index.html";


    } else {
        alert("already have profile")
        location.href="./profileFolder/profile.html";

    }
})