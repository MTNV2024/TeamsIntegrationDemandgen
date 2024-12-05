document.getElementById('configForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Set the default GitHub Pages URL here
  const defaultWebhookURL = 'https://mtnv2024.github.io/TeamsIntegrationDemandgen/webhookEndpoint'; // <-- Your GitHub Pages URL
  const webhookURL = document.getElementById('webhookURL').value || defaultWebhookURL; // Use the default if no input
  const message = document.getElementById('message').value;

  // Simple validation
  if (!webhookURL || !message) {
    alert('Please fill out all fields.');
    return;
  }

  const configData = {
    webhookURL: webhookURL,
    message: message
  };

  console.log('Configuration saved:', configData);

  // Provide user feedback
  document.getElementById('statusMessage').innerHTML = 'Configuration saved successfully!';
});
