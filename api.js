var rootUrl = 'http://api.openweathermap.org/data/2.5/weather?appid=ec29f6abe91e76bfead8ca5b932245a3';
export default function(code) {
  var url = `${rootUrl}&id=${code}`;
  console.log(url);

  return fetch(url)
    .then(function(response){
      return response.json()
    })
    .then(function(json){
      console.log(json);
      return {
        WeatherMain: json.weather[0].main,
        WeatherName: json.name
      };
    });
}