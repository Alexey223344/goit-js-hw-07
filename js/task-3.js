const readInput = document.querySelector('#name-input');
readInput.addEventListener('input', getClick);

function getClick(event) {
  const greeting = document.querySelector('#name-output');
  if (event.currentTarget.value.trim()) {
    return (greeting.textContent = event.currentTarget.value.trim());
  } else {
    return (greeting.textContent = 'Anonymous');
  }
}
