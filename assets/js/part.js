//---------------------------------------------References-------------------------------------------------------//
   
let userlink = document.getElementById('userlink');
let signoutlink = document.getElementById('signoutlink');
var currentUser=null;

//---------------------------------------------fonksiyonlar-------------------------------------------------------//
    
function getUsername(){
    let keepLoggedIn=localStorage.getItem("keepLoggedIn");
    if(keepLoggedIn =="yes"){
    currentUser=localStorage.getItem('user');
  }
  else{
    currentUser=sessionStorage.getItem('user');
  }
}

function signOut(){
  sessionStorage.removeItem('user');
  localStorage.removeItem('user');
  localStorage.removeItem('keepLoggedIn');
  window.location="addService.html";  
}
//---------------------------------------------window loads-------------------------------------------------------//

window.onload=function(){
    getUsername();
    if(currentUser==null){
      userlink.innerText="s";
      userlink.classList.replace("nav-link","btn");
      userlink.classList.add("btn-primary");
      userlink.href="sign.html";

      signoutlink.innerText="Login";
      signoutlink.classList.replace("nav-link","btn");
      signoutlink.classList.add("btn-success");
      signoutlink.href="login.html";
    }

    else{

      userlink.innerHTML=currentUser.email;
      header.innerText="welcome "+ currentUser.email;
      userlink.classList.replace("btn","nav-link");
      userlink.classList.add("btn-primary");
      userlink.href="#";

      signoutlink.innerHTML="Sign Out";
      signoutlink.classList.replace("btn","nav-link");
      signoutlink.classList.add("btn-success");
      signoutlink.href="javascript:signOut();";
    }
  }