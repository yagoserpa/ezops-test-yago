var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser')
var app = express();
var server = app.listen(3000, () => {
 console.log('server is running on port', server.address().port);
});
var dbUrl = 'mongodb://application:chatbot2020@messages-shard-00-00-bpbe7.mongodb.net:27017,messages-shard-00-01-bpbe7.mongodb.net:27017,messages-shard-00-02-bpbe7.mongodb.net:27017/test?ssl=true&replicaSet=messages-shard-0&authSource=admin&retryWrites=true&w=majority'
mongoose.connect(dbUrl,{ useUnifiedTopology: true, useNewUrlParser: true }, (err) => {
   console.log('MongoDB connected',err);
})
var Message = mongoose.model('Message',{ name : String, message : String})
app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))
app.get('/messages', (req, res) => {
  Message.find({},(err, messages)=> {
    res.send(messages);
  })
})
app.post('/messages', (req, res) => {
  var message = new Message(req.body);
  message.save((err) =>{
    if(err)
      sendStatus(500);
    res.sendStatus(200);
  })
})
