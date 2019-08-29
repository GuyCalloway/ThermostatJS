$(document).ready(function() {
  $.get('http://api.openweathermap.org/data/2.5/weather?q=London&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
  $('#current-temperature').text(data.main.temp);
})

  var thermostat = new Thermostat ();
  updateTemperature();
   
    $('#temperature-up').on('click', function() {
     thermostat.up();
     updateTemperature();
   });

   $('#temperature-down').on('click', function() {
    thermostat.down();
    updateTemperature();
  });

  $('#temperature-reset').on('click', function() {
    thermostat.reset();
    updateTemperature();
  });

  $('#powersaving-switch').on('click', function() {
    thermostat.powersaving();
    updateTemperature();
    $('#power-saving-status').text(thermostat._powersaving);
  });

  $('#current-city').change(function() {
    var city = $('#current-city').val();
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
      $('#current-temperature').text(data.main.temp)
      // $('#current-temperature').attr('class', thermostat.temp(data.main.temp))
    })
  })

  // function displayWeather(city) {
  //   var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
  //   var token = '&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric';
  //   var units = '&units=metric';
  //   $.get(url + token + units, function(data) {
  //     $('current-temperature').text(data.main.temp);
  //   })
  // }
   
  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
    $('#temperature').attr('class', thermostat.usage());
  }
});



