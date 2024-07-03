const checkForm = document.querySelector('.login-form');
checkForm.addEventListener('submit', getUserData);

function getUserData(event) {
  event.preventDefault();
  if (
    event.currentTarget.elements.email.value.trim() &&
    event.currentTarget.elements.password.value.trim()
  ) {
    console.log({
      email: event.currentTarget.elements.email.value.trim(),
      password: event.currentTarget.elements.password.value.trim(),
    });
    event.currentTarget.reset();
  } else {
    return alert('All form fields must be filled in');
  }
}
