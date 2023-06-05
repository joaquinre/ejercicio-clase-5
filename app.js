const openFormButton = document.getElementById('openFormButton')
const registerForm = document.getElementById('registrationForm')
const steps = Array.from(document.getElementsByClassName('step'))

openFormButton.addEventListener('click', () => {
  registerForm.classList.remove('hidden')
})

function showSteps(stepNumber) {
  steps.forEach((step, index) => {
    if (index === stepNumber) {
      step.classList.remove('hidden')
    } else {
      step.classList.add('hidden')
    }
  })
}

function goToNextStep(currentStep) {
  showSteps(currentStep + 1)
}

const nextStep1 = document.getElementById('nextStep1');
const nextStep2 = document.getElementById('nextStep2');
const nextStep3 = document.getElementById('nextStep3');


nextStep1.addEventListener('click', () => {
  if (validateStep1()) {
    goToNextStep(0); 
  }
});

nextStep2.addEventListener('click', () => {
  if (validateStep2()) {  
    goToNextStep(2);
  }
});

nextStep3.addEventListener('click', () => {
  if (validateStep3()) {
    goToNextStep(2); 
  }
});


const submitForm = document.getElementById('submitForm')
submitForm.addEventListener('click', () => {
  if (validateStep4()) {   
    // Validate form data   
        const expirationTime = new Date()
        expirationTime.setTime(expirationTime.getTime() + 10000) // added 10 seconsd
        document.cookie = `fullName=${encodeURIComponent(fullName)}; expires=${expirationTime.toUTCString()}`;
        document.cookie = `password=${encodeURIComponent(password)}; expires=${expirationTime.toUTCString()}`;
        document.cookie = `username=${encodeURIComponent(username)}; expires=${expirationTime.toUTCString()}`;
        document.cookie = `dateOfBirth=${encodeURIComponent(dateOfBirth)}; expires=${expirationTime.toUTCString()}`;
        
        // Hide the form
        document.getElementById('registrationForm').classList.add('hidden');
        
        alert('succesfull register!')
      } else {
        alert('Fill all the inputs!')
      }
    });

function validateStep1() {
    const fullName = document.getElementById('fullName').value;
    const confirmFullName = document.getElementById('confirmFullName').value;

    if (fullName.trim().length < 2 || confirmFullName.trim().length < 2) {
      alert('Please enter at least 2 characters');
      return false;
    }

    if (fullName !== confirmFullName) {
      alert('Full Name and Confirm Full Name do not match.');
      return;
    }

    return true;
  }

function validateStep2() {
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  if (password.trim().length < 2 || confirmPassword.trim().length < 2) {
    alert('Please enter at least 2 characters');
    return false;
  }

  if (password !== confirmPassword) {
    alert('Password and Confirm Password do not match.');
    return;
  }

  return true;
}

function validateStep3() {
  const username = document.getElementById('username').value;

  if (username.trim().length < 2) {
    alert('Please at least 2 characters');
    return false;
  }

  return true;
}

function validateStep4() {
  const dateOfBirth = document.getElementById('dateOfBirth').value;
  const agreeToTerms = document.getElementById('agreeToTerms').checked;

  const currentDate = new Date();
  const selectedDate = new Date(dateOfBirth);
  const ageDiff = currentDate - selectedDate;
  const age = Math.floor(ageDiff / (1000 * 60 * 60 * 24 * 365));
  
  if (dateOfBirth === '') {
    alert('Please enter a valid Date of Birth.');
    return false;
  }
  if (age < 18) {
    alert('You must be at least 18 years old to register.');
    return false;
  }
  
  if (!agreeToTerms) {
    alert('Please agree to the terms and conditions.');
    return false;
  }

  return true;
}
    