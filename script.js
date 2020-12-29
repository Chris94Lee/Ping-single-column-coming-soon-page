const email = document.getElementById('email');
const error = document.getElementById('error');
const notify = document.getElementById('notify');


function emailValidation(){
  const emailInput = email.value;
  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const checkEmail = emailPattern.test(emailInput);

  if(emailInput === ""){
    error.innerHTML = "Email cannot be empty";
  } else if (checkEmail == false){
    error.innerHTML = "Please provide a valid email address";
    event.preventDefault();
  } else{
    error.innerHTML = "";
  }

}

notify.addEventListener('click', emailValidation);