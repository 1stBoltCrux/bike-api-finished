import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { GetData } from './api.js';


let showError = function () {
  $('#errors').text("There was an error processing your request. Please try again.");
}


let displayBikes = function (bikeArray) {
  $('#output').empty();
  bikeArray.forEach(function(bike) {
    $('#output').append(`<ul><li>${bike.title}</li><li>${bike.stolen_location}</li><li>${bike.frame_colors}</li><li>${bike.year}</li><li>${bike.stolen}</li><ul>`);
  });
}

$(document).ready(function() {

  let getData = new GetData();
  $('#form1').submit(function(event){
    event.preventDefault();
    let title = $('#titleInput').val();
    $('#titleInput').val("");
    let color = $('#colorInput').val();
    $('#colorInput').val("");
    let city = $('#cityInput').val();
    $('#cityInput').val("");
    let state = $('#stateInput').val();
    $('#stateInput').val("");
    let year = parseInt($('#yearInput').val());
    $('#yearInput').val("");
    console.log(year);
    getData.apiCall(title, color, city, state, year, displayBikes, showError);
  });
});
