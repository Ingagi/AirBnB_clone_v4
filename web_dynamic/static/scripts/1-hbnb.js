$(document).ready(function() {
  // Array to store selected amenity IDs
  var selectedAmenities = [];

  // Listen for changes on each input checkbox tag
  $('input[type="checkbox"]').change(function() {
    var amenityId = $(this).data('id');
    var amenityName = $(this).data('name');

    if (this.checked) {
      // Add amenity ID to selected amenities
      selectedAmenities.push(amenityId);
    } else {
      // Remove amenity ID from selected amenities
      var index = selectedAmenities.indexOf(amenityId);
      if (index !== -1) {
        selectedAmenities.splice(index, 1);
      }
    }

    // Update display of selected amenities
    updateSelectedAmenities();
  });

  // Function to update display of selected amenities
  function updateSelectedAmenities() {
    var amenitiesList = selectedAmenities.map(function(id) {
      return '<li>' + id + '</li>';
    });
    $('.results').html('<h4>Selected Amenities:</h4><ul>' + amenitiesList.join('') + '</ul>');
  }
});

