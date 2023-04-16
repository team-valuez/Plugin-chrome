document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('form');
  const inputField = document.getElementById('input-field');
  const responseElement = document.getElementById('response');

  form.addEventListener('submit', function(event) {
    event.preventDefault(); // prevent the form from submitting normally
    var text = inputField.value;
    const data = { id: 0,
                  name :text};
    fetch('http://127.0.0.1:5000/names', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(data => {
        responseElement.textContent = JSON.stringify(data);
      })
      .catch(error => console.error(error));
  });
});
