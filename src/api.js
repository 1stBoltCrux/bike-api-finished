import $ from 'jquery';

class GetData {

  apiCall(zip, distance, manufacturer, displayBikes, showError) {
    $.get(`https://bikeindex.org:443/api/v3/search?page=1&per_page=25&manufacturer=${manufacturer}&location=${zip}&distance=${distance}&stolenness=stolen&access_token=cors`).then(function(response) {
      displayBikes(response);
    }).fail(function(){
      showError();
    });
  }
}

export { GetData };
