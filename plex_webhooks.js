var express = require('express'),
    request = require('request'),
    multer  = require('multer'),
    axios = require('axios');

var app = express();
var upload = multer({ dest: '/tmp/' });

app.post('/', upload.single('thumb'), function (req, res, next) {
  var payload = JSON.parse(req.body.payload);

  if (payload.Account.title == 'RyalZX') {
    if (payload.event == 'media.play' || payload.event == 'media.resume') {
      axios.get('https://maker.ifttt.com/trigger/light_off/json/with/key/chnty6hdC62iuDEZ00oOCg')
    } else if (payload.event == 'media.stop' || payload.event == 'media.pause') {
      axios.get('https://maker.ifttt.com/trigger/light_on/json/with/key/chnty6hdC62iuDEZ00oOCg')
    }
  }

  res.sendStatus(200);
});

app.listen(12000);
