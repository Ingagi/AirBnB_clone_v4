$(document).ready(function() {
  // Function to fetch and display reviews
  function fetchReviews() {
    $.ajax({
      type: "GET",
      url: "http://0.0.0.0:5001/api/v1/reviews/",
      success: function(data) {
        displayReviews(data);
      },
      error: function(xhr, status, error) {
        console.error("Error fetching reviews:", error);
      }
    });
  }

  // Function to display reviews in the DOM
  function displayReviews(reviews) {
    var reviewsHtml = '';
    reviews.forEach(function(review) {
      reviewsHtml += '<div class="review">';
      reviewsHtml += '<p><strong>' + review.user + '</strong>: ' + review.text + '</p>';
      reviewsHtml += '</div>';
    });
    $('.reviews').html(reviewsHtml);
  }

  // Initial state: reviews are hidden
  var reviewsVisible = false;

  // Toggle reviews on span click
  $('.toggle-reviews').click(function() {
    if (reviewsVisible) {
      $('.reviews').empty();
      $('.toggle-reviews').text('show');
    } else {
      fetchReviews();
      $('.toggle-reviews').text('hide');
    }
    reviewsVisible = !reviewsVisible;
  });
});

