var express = require('express');
var router = express.Router();
const accountSid = "AC770706fc43d4d1d3f7cd8fb2858787b8";
const authToken = "29394276363a25c7414f4a407542c677";
const client = require('twilio')(accountSid, authToken);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res, next) {
  console.log(req.body);
  if (req.body.EventType == "onConversationAdded") {
    client.conversations.conversations(req.body.ConversationSid)
                    .participants
                    .create({identity: 'testPineapple'})
                    .then(participant => console.log(participant.sid));
  }
  console.log("Received");
  res.send("Success");
})
module.exports = router;
