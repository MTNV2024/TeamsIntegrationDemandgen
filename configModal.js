document.getElementById('configForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const message = document.getElementById('message').value;

  // Hardcoded webhook URL
  const webhookURL = "https://demant.webhook.office.com/webhookb2/9ef097e3-8845-441a-ba27-b99a1d0a0df4@9bf8c7a8-e008-49a7-9e43-ab76976c4bf8/IncomingWebhook/28311e0803c14770b2ecb4a1173bf096/91002fde-077d-4dec-95a4-b3867a2c7509/V2kA45SCs54X3bWcWs_4KJzGryKb4q56AocpVu5YALryE1";

  // Validation
  if (!message) {
    alert('Please enter a message.');
    return;
  }

  const configData = {
    webhookURL: webhookURL,
    message: message
  };

  // Log configuration data
  console.log('Configuration saved:', configData);

  // Provide user feedback
  document.getElementById('statusMessage').innerHTML = 'Configuration saved successfully!';
});
