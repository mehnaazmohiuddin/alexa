var Alexa = require('alexa-sdk');
var textMessages = require('./constants/textMessages');

exports.handler = function(event, context, callback){
  var alexa = Alexa.handler(event, context);
  alexa.registerHandlers(handlers);
  alexa.execute();
};
console.log(textMessages["WelcomeMessage"]);

var handlers = {
  'LaunchRequest': function () {
    this.emit(':ask', textMessages["WelcomeMessage"],textMessages["WelcomeMessageRepromt"]);
  }
};
