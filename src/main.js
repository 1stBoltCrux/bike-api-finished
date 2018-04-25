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
    $.ajax({
      url: `https://bikeindex.org:443/api/v3/search?page=1&per_page=25&manufacturer=trek&location=${zip}&distance=10&stolenness=stolen&access_token=cors`,
      // headers: {
      //   "Access-Control-Allow-Origin": "*"
      // },
      type: 'GET',
      data: {
        format: 'json'
      },
      success: function(response) {
        let bikeArray = response.bikes;
        $('#output').empty();
        bikeArray.forEach(function(bike) {
          $('#output').append(bike.manufacturer_name);
        });
        //$('#output').text();
      },
      error: function() {
        $('#errors').text("There was an error processing your request. Please try again.");
      }
    });
  });
});
