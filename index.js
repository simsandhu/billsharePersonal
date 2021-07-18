// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
// CH0e42aa47788241a1905f46c68ff37e88 - conversation sid
// IS11d0939617334e23a95fdd4cff5d62be - convoser sid
// participant sid - MBdd9ab830128a45eca3af4e6a7fe8fa25
// api key - SK099c91f0cdd0762d1c4fe251c8580001
// chat token - eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImN0eSI6InR3aWxpby1mcGE7dj0xIn0.eyJqdGkiOiJTSzA5OWM5MWYwY2RkMDc2MmQxYzRmZTI1MWM4NTgwMDAxLTE2MjI3NDU4MjQiLCJncmFudHMiOnsiaWRlbnRpdHkiOiJ0ZXN0UGluZWFwcGxlIiwiY2hhdCI6eyJzZXJ2aWNlX3NpZCI6IklTMTFkMDkzOTYxNzMzNGUyM2E5NWZkZDRjZmY1ZDYyYmUifX0sImlhdCI6MTYyMjc0NTgyNCwiZXhwIjoxNjIyNzQ5NDI0LCJpc3MiOiJTSzA5OWM5MWYwY2RkMDc2MmQxYzRmZTI1MWM4NTgwMDAxIiwic3ViIjoiQUM3NzA3MDZmYzQzZDRkMWQzZjdjZDhmYjI4NTg3ODdiOCJ9.9RNAH2F7WcRyRh8iXrUeeN7-Nn3g3Z-JcFEPfgF4B5Y


const accountSid = "AC770706fc43d4d1d3f7cd8fb2858787b8";
const authToken = "29394276363a25c7414f4a407542c677";
const client = require('twilio')(accountSid, authToken);

// client.conversations.conversations
//                     .create({friendlyName: 'My First Conversation'})
//                     .then(conversation => console.log(conversation));


// client.conversations.conversations('CH0e42aa47788241a1905f46c68ff37e88')
// .fetch()
// .then(conversation => console.log(conversation.chatServiceSid));

// client.conversations.conversations('CH0e42aa47788241a1905f46c68ff37e88')
//   .participants
//   .create({
//      'messagingBinding.address': '+16164909810',
//      'messagingBinding.proxyAddress': '+19168238663'
//    })
//   .then(participant => console.log(participant.sid));

// client.conversations.conversations('CH8a99a5d9ca824f23a25305f8301db808')
//                     .participants
//                     .create({identity: 'testPineapple'})
//                     .then(participant => console.log(participant.sid));

client.conversations.conversations("CH991bb06e2aff44758f79d62715311bd4").remove();
// client.conversations.conversations
//       .list({limit: 20})
//       .then(conversations => conversations.forEach(c => console.log(c.sid)));