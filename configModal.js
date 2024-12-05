document.getElementById('configForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const webhookURL = document.getElementById('webhookURL').value;
  const message = document.getElementById('message').value;

  // Simple validation
  if (!webhookURL || !message) {
    alert('Please fill out all fields.');
    return;
  }

  // Simulate saving the configuration (in reality, you may want to save this in a database or to Salesforce)
  const configData = {
    webhookURL: webhookURL,
    message: message
  };

  console.log('Configuration saved:', configData);

  // Provide user feedback
  document.getElementById('statusMessage').innerHTML = 'Configuration saved successfully!';
});
