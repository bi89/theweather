var rootUrl = 'http://samples.openweathermap.org/data/2.5/weather?&appid=b1b15e88fa797225412429c1c50c122a1';

export default function(code) {
  var url = `${rootUrl}?id=${code}`;

  return fetch(url)
    .then(function(response){
      return response.text();
    })
    .then(function(text){
      console.log(text);
      let json = JSON.parse(text.replace("//",''))[0];
      return {
        WeatherMain: json.main,
        WeatherDescription: json.description
      };
    });
}
