import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { GetData } from './api.js';


let showError = function () {
  $('#errors').text("There was an error processing your request. Please try again.");
}


let displayBikes = function (response) {
  let bikeArray = response.bikes;
  $('#output').empty();
  bikeArray.forEach(function(bike) {
    $('#output').append(`<ul><li>${bike.title}</li><li>${bike.stolen_location}</li><li>${bike.frame_colors}</li><ul>`);
  });
}

$(document).ready(function() {

  let getData = new GetData();
  $('#form1').submit(function(event){
    event.preventDefault();
    let zip = $('#zipInput').val();
    $('#zipInput').val("");
    let distance = $('#distanceInput').val();
    $('#distanceInput').val("");
    let manufacturer = $('#manufacturerInput').val();
    $('#manufacturerInput').val("");
    getData.apiCall(zip, distance, manufacturer, displayBikes, showError);
  });
});
