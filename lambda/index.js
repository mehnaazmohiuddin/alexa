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
  },
  'GetChange':function (){
    // check if there are 2 number values.
    var numberA = this.event.request.intent.slots.NumberA.value;
    var numberB = this.event.request.intent.slots.NumberB.value;
    if(numberA&&numberB){
        numberA=parseInt(numberA);
        numberB=parseInt(numberB);
        var difference = numberA-numberB;
        if(difference<0){
          difference*=-1;
        }
        this.emit(':tell', difference+" is to be given or gotten");
    }else{
      this.emit(':ask', "Sorry i could not catch the numbers please tell two values to know the difference","Please tell 2 numbers inorder to know the change");

    }
  }
};
