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
  goToNextStep(0);
});

nextStep2.addEventListener('click', () => {
  goToNextStep(1);
});

nextStep3.addEventListener('click', () => {
  goToNextStep(2);
});


const submitForm = document.getElementById('submitForm')
submitForm.addEventListener('click', () => {
  // get data
    const fullName = document.getElementById('fullName').value;
    console.log(fullName);
    const confirmFullName = document.getElementById('confirmFullName').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const username = document.getElementById('username').value;
    const dateOfBirth = document.getElementById('dateOfBirth').value;
    const agreeToTerms = document.getElementById('agreeToTerms').checked;
    console.log(password, confirmPassword, username, dateOfBirth, agreeToTerms);

    // Validate form data
    if (fullName && confirmFullName && password && confirmPassword && username && dateOfBirth && agreeToTerms) {
      // Store data in cookies
      document.cookie = `fullName=${fullName}`;
      document.cookie = `password=${password}`;
      document.cookie = `username=${username}`;
      document.cookie = `dateOfBirth=${dateOfBirth}`;

      // Hide the form
      document.getElementById('registrationForm').classList.add('hidden');

    alert('registro exitoso!')
  } else {
    alert('Completa todos los campos!')
  }
});
