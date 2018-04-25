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
    let bikeArray = [];
    for (var i = 0; i < this.response.bikes.length; i++) {
      let titleCondition = this.response.bikes[i].title.includes(this.title);
      let colorCondition = this.response.bikes[i].frame_colors.includes(this.color);
      let cityCondition = this.response.bikes[i].stolen_location.includes(this.city);
      let stateCondition = this.response.bikes[i].stolen_location.includes(this.state);
      let yearCondition = this.response.bikes[i].year === (this.year);
      if(isNaN(this.year)) { yearCondition = true }
      if  (titleCondition && colorCondition && cityCondition && stateCondition && yearCondition){
        bikeArray.push(this.response.bikes[i]);
      }
    }
    console.log(bikeArray.length);
    return bikeArray;
  }

}

class GetData {

  apiCall(title, color, city, state, year, displayBikes, showError) {
    $.get(`https://bikeindex.org:443/api/v3/search?per_page=100&access_token=cors`).then(function(response) {
      let filterData = new FilterData(title, color, city, state, year, response);
      displayBikes(filterData.filterResponse());
    }).fail(function(){
      showError();
    });
  }
}

export { GetData };
