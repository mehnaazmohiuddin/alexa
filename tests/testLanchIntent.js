var assert = require('assert');
var skill = require('../lambda/index.js');
var context = require('./contextObject.js');
describe('LaunchRequest', function() {
  describe('LanchRequest', function() {

    it('should reply with a open ended session', function() {
      eventMessage = {
  "session": {
    "new": true,
    "sessionId": "SessionId.d14e6af2-8446-4e97-9692-941ed385d9fb",
    "application": {
      "applicationId": "amzn1.ask.skill.a0d60b73-21d7-4625-9bab-00f14b82cb2b"
    },
    "attributes": {},
    "user": {
      "userId": "amzn1.ask.account.AEMIXBWXFQDB3PXJU74APKBBXJCCTLHXYYTRSPSJYXP3RLKSKYFP43IWMXMRBLI6T5DQXKAA6NEAAEIJ3DLIG3OMOU53N3NWJKYSIISRV6I5C6PGH77UN6FPZO3UMRNZXWMLKPOLNHR46E5D74I4LVR2ZDJG3FZXJKWRUK7PEMAWF7ZPFVDES2UOVJN7QSBBGKTV57SCEINUUNQ"
    }
  },
  "request": {
    "type": "LaunchRequest",
    "requestId": "EdwRequestId.8b92fa9b-a9e9-4d50-9075-68ec1ed4c55b",
    "locale": "en-IN",
    "timestamp": "2018-02-14T05:42:33Z"
  },
  "context": {
    "AudioPlayer": {
      "playerActivity": "IDLE"
    },
    "System": {
      "application": {
        "applicationId": "amzn1.ask.skill.a0d60b73-21d7-4625-9bab-00f14b82cb2b"
      },
      "user": {
        "userId": "amzn1.ask.account.AEMIXBWXFQDB3PXJU74APKBBXJCCTLHXYYTRSPSJYXP3RLKSKYFP43IWMXMRBLI6T5DQXKAA6NEAAEIJ3DLIG3OMOU53N3NWJKYSIISRV6I5C6PGH77UN6FPZO3UMRNZXWMLKPOLNHR46E5D74I4LVR2ZDJG3FZXJKWRUK7PEMAWF7ZPFVDES2UOVJN7QSBBGKTV57SCEINUUNQ"
      },
      "device": {
        "supportedInterfaces": {}
      }
    }
  },
  "version": "1.0"
}
var failFunction = function (data){
  assert.fail('It failed');
}
var succeedCallback = function (data){
    assert.equal(data.response.shouldEndSession, false);
}
var myContext = new context( failFunction,succeedCallback);
skill.handler(eventMessage, myContext, function (){
  console.log('Some callback happening');
})
    });
  });
});
