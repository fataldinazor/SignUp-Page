'use strict'

const email=document.querySelector('#user_email');
const emailError=document.querySelector('#user_email+span')

const phNumber=document.querySelector('#user_number');
const phNumberError=document.querySelector('#user_number+span')

const passwordInput = document.getElementById('pwd');
const confirmPasswordInput = document.getElementById('cnfpwd');
const passwordError = document.getElementById('passwordError');
const confirmPasswordError = document.getElementById('confirmPasswordError');

// Function to validate password match
function validatePassword() {
    if (passwordInput.value !== confirmPasswordInput.value) {
        confirmPasswordError.textContent = "Passwords do not match";
    } else {
        confirmPasswordError.textContent = "";
    }
    confirmPasswordError.classList.add('error', 'active')
}
confirmPasswordInput.addEventListener('input', validatePassword);

email.addEventListener('input', function(){
  if(email.validity.valid){
    emailError.textContent='';
    emailError.classList.add('error')
  }
  else {
    showError(email);
  }
})

phNumber.addEventListener('input', function(){
  if(phNumber.validity.valid){
    phNumberError.textContent='';
    phNumberError.classList.add('error')
  }
  else {
    showError(phNumber);
  }
})

function showError(input){
  if(input===email){
  if (email.validity.valueMissing){
    emailError.textContent='You need to put email'
  }
  else if (email.validity.typeMismatch) {
    emailError.textContent = "Entered value needs to be an email address.";
  }
  else if(email.validity.tooShort){
    emailError.textContent="Too short";
  }
  emailError.classList.add('error', 'active')
}

  if(input===phNumber){
    if (phNumber.validity.valueMissing){
      phNumberError.textContent='You need to put phone Number'
    }
   if(input.validity.rangeUnderflow ||input.validity.rangeOverflow){
      phNumberError.textContent="10 digit Phone Number";
    }
    phNumberError.classList.add('error', 'active')  
  }
}




