
function context (failCallback, succeedCallback){
  this.startTime = Date.now();
  this.fail = function (data){
    console.log('\x1b[31m','Coming from failure',arguments);
    failCallback(data);
  }
  this.succeed = function (data){
    console.log('\x1b[42m','Coming from succeed',arguments);
    succeedCallback(data);
  }
  this.getTimeRemaing = function(){
    return 10000 - ( Date.now()- this.startTime);
  }
}

module.exports = context;
