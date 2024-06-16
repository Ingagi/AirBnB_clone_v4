$(document).ready(function() {
  // Function to check API status
  function checkApiStatus() {
    $.get('http://0.0.0.0:5001/api/v1/status', function(data) {
      if (data.status === 'OK') {
        $('#api_status').addClass('available');
      } else {
        $('#api_status').removeClass('available');
      }
    });
  }

  // Initial check on page load
  checkApiStatus();

  // Periodically check API status (every 5 seconds)
  setInterval(checkApiStatus, 5000);
});

