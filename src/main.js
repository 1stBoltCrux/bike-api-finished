import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

// this code would not work if the entry point was not   entry: './src/main.js',
$(document).ready(function(){
  $('#form1').submit(function(event){
    event.preventDefault();
    let zip = $('#zipInput').val();
    $('#zipInput').val("");
    let distance = $('#distanceInput').val();
    $('#distanceInput').val("");
    let manufacturer = $('#manufacturerInput').val();
    $('#manufacturerInput').val("");
    $.ajax({
      url: `https://bikeindex.org:443/api/v3/search?page=1&per_page=25&manufacturer=${manufacturer}&location=${zip}&distance=${distance}&stolenness=stolen&access_token=cors`,
      type: 'GET',
      data: {
        format: 'json'
      },
      success: function(response) {
        let bikeArray = response.bikes;
        $('#output').empty();
        bikeArray.forEach(function(bike) {
          $('#output').append(`<ul><li>${bike.title}</li><li>${bike.stolen_location}</li><li>${bike.frame_colors}</li><ul>`);
        });
        //$('#output').text();
      },
      error: function() {
        $('#errors').text("There was an error processing your request. Please try again.");
      }
    });
  });
});
