$(document).ready(function() {
  // Function to fetch places from API
  function fetchPlaces() {
    $.ajax({
      type: "POST",
      url: "http://0.0.0.0:5001/api/v1/places_search",
      contentType: "application/json",
      data: JSON.stringify({}),
      success: function(data) {
        displayPlaces(data);
      },
      error: function(xhr, status, error) {
        console.error("Error fetching places:", error);
      }
    });
  }

  // Function to display places in the DOM
  function displayPlaces(places) {
    var placesHtml = '';
    places.forEach(function(place) {
      placesHtml += '<article>';
      placesHtml += '<div class="title_box">';
      placesHtml += '<h2>' + place.name + '</h2>';
      placesHtml += '<div class="price_by_night">$' + place.price_by_night + '</div>';
      placesHtml += '</div>';
      placesHtml += '<div class="information">';
      placesHtml += '<div class="max_guest">' + place.max_guest + ' Guest(s)</div>';
      placesHtml += '<div class="number_rooms">' + place.number_rooms + ' Bedroom(s)</div>';
      placesHtml += '<div class="number_bathrooms">' + place.number_bathrooms + ' Bathroom(s)</div>';
      placesHtml += '</div>';
      placesHtml += '<div class="description">' + place.description + '</div>';
      placesHtml += '</article>';
    });
    $('.places').html(placesHtml);
  }

  // Initial fetch of places on page load
  fetchPlaces();
});

