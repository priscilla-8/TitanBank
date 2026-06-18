const form =
document.getElementById("signupForm");

const password =
document.getElementById("password");

const toggle =
document.getElementById("toggle");

const terms =
document.getElementById("terms");

const loader =
document.getElementById("loader");



toggle.onclick = ()=>{

if(password.type==="password"){

password.type="text";

toggle.textContent="🙈";

}

else{

password.type="password";

toggle.textContent="👁";

}

};




form.addEventListener("submit",(e)=>{

e.preventDefault();



if(!terms.checked){

alert("Please accept the Terms and Conditions");

return;

}



if(password.value.length < 8){

alert("Password must be at least 8 characters");

return;

}



loader.style.display="flex";



setTimeout(()=>{

window.location.href="dashboard.html";

},3000);



});