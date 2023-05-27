let profile_container=document.querySelector(".profile");
let logoutBtn=document.querySelector("#logout");
let errorEl=document.querySelector(".error");
let succesEl=document.querySelector(".succes");
let signUpEl=document.querySelector("#signUp");
let profilEl=document.querySelector("#pro");


if(localStorage.getItem("user_obj"))
{
   let user_obj= JSON.parse(localStorage.getItem("user_obj"))
   profile_container.innerHTML="";
   profile_container.innerHTML=` <h1>Profile</h1>
        <div>Full Name :${user_obj.name}</div>
        <div>Email :${user_obj.email}</div>
        <div>Password :${user_obj.password}</div>`;
}

logoutBtn.addEventListener("click",()=>{
    localStorage.removeItem("user_obj");
    profile_container.innerHTML=` <h1>Profile</h1>
    <div>Full Name :</div>
    <div>Email :</div>
    <div>Password :</div>`;

    succesEl.innerHTML="successfully signout,click sign up again";
    succesEl.style.display="block";
})

signUpEl.addEventListener("click",()=>{
    let user_obj=JSON.parse(localStorage.getItem("user_obj"))
    if(!user_obj || !user_obj.accesstoken)
    {
        location.href="../index.html"
    }
    else{
        alert("already sign up!")
        
        location.href="./profile.html"
    }
})

profilEl.addEventListener("click",()=>{
    let user_obj=JSON.parse(localStorage.getItem("user_obj"))
    if(!user_obj || !user_obj.accesstoken)
    {
        alert("you have sign up");
        location.href="../index.html";
    }
    else{
        alert("already have profile");
    }
})