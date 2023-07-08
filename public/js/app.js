// modal

const copyButton = document.querySelector('.modal-body .btn');
const inputField = document.querySelector('.modal-body input');

copyButton.addEventListener('click', () => {
  // Copy text to clipboard
  navigator.clipboard.writeText(inputField.value).then(() => {
    // Change button text to "Copied!"
    copyButton.textContent = 'Copied!';

    // Reset button text after 5 seconds
    setTimeout(() => {
      copyButton.textContent = 'Copy';
    }, 5000);
  });
});
