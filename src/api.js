import $ from 'jquery';

class FilterData {
  constructor (title, color, city, state, year, response) {
    this.title = title;
    this.color = color;
    this.city = city;
    this.state = state;
    this.year = year;
    this.response = response;
  }

  filterResponse () {

    return this.response;
  }

}

class GetData {

  apiCall(title, color, city, state, year, displayBikes, showError) {
    $.get(`https://bikeindex.org:443/api/v3/search?page=1&per_page=25&stolenness=stolen&access_token=cors`).then(function(response) {
      let filterData = new FilterData(title, color, city, state, year, response);
      displayBikes(filterData.filterResponse());
    }).fail(function(){
      showError();
    });
  }
}

export { GetData };
