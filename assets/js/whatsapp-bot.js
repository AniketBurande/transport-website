// Simple WhatsApp bot simulation using browser prompts
// Collects the same fields as the Request a Quote form
// and opens WhatsApp with a pre-filled message

window.addEventListener('DOMContentLoaded', function () {
  var link = document.getElementById('whatsapp-bot');
  if (!link) return;
  link.addEventListener('click', function (e) {
    e.preventDefault();

    var questions = [
      { label: 'Your Name' },
      { label: 'Your Email' },
      { label: 'Phone Number (Optional)' },
      { label: 'Trip Source City' },
      { label: 'Trip Destination City' },
      { label: 'Type of Vehicle Required' },
      { label: 'Weight of Material (in tons)' },
      { label: 'Type of Material' },
      { label: 'Any additional notes' }
    ];

    var answers = [];
    for (var i = 0; i < questions.length; i++) {
      var response = prompt(questions[i].label + ':');
      if (response === null) return; // user cancelled
      answers.push(response);
    }

    var message =
      'Name: ' + answers[0] + '\n' +
      'Email: ' + answers[1] + '\n' +
      'Phone: ' + answers[2] + '\n' +
      'Source: ' + answers[3] + '\n' +
      'Destination: ' + answers[4] + '\n' +
      'Vehicle: ' + answers[5] + '\n' +
      'Weight: ' + answers[6] + '\n' +
      'Material: ' + answers[7] + '\n' +
      'Notes: ' + answers[8];

    var encoded = encodeURIComponent(message);
    var url = 'https://wa.me/919876543210?text=' + encoded;
    window.open(url, '_blank', 'noopener');
    alert('Thank you for the response and we will get back to you shortly');
  });
});
