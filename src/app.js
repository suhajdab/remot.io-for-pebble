var UI = require('ui');

// Create a Card with title and subtitle
var card = new UI.Card({
  title:'remot.io'
  //subtitle:'Fetching...'
});

card.body('Control your html presentation from your watch!');

// Display the Card
card.show();


/* for accelerometer controlling presentation

var Accel = require('ui/accel');
Accel.init();
Accel.on('tap', function(e) {
  console.log('Tap event on axis: ' + e.axis + ' and direction: ' + e.direction);
});

*/

/* ajax to communicate with remot.io server
var ajax = require('ajax');

ajax(
  {
    url: 'http://api.theysaidso.com/qod.json',
    type: 'json'
  },
  function(data) {
    console.log('Quote of the day is: ' + data.contents.quote);
  },
  function(error) {
    console.log('The ajax request failed: ' + error);
  }
);
*/

/* button event listeners

wind.on('click', 'up', function() {
  console.log('Up clicked!');
});

*/

/* splash screen

var splashScreen = new UI.Card({ banner: 'images/splash.png' });
splashScreen.show();

var mainScreen = new UI.Menu();

setTimeout(function() {
  // Display the mainScreen
  mainScreen.show();
  // Hide the splashScreen to avoid showing it when the user press Back.
  splashScreen.hide();
}, 400);

*/

/* action menu - icons next to buttons

var card = new UI.Card({
  action: {
    up: 'images/action_icon_plus.png',
    down: 'images/action_icon_minus.png'
  }
});

*/