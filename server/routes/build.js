var express = require('express');
var router = express.Router();
var proxy = require('http-proxy').createProxyServer();

router.get('/*', function (req, res, next) {
  //not authorized
  if(req.url === '/1.bundle.js') {
    res.status(401);
    res.end();
    return;
  }
  proxy.web(req, res, {
      target: 'http://localhost:8081/build'
  });
});

proxy.on('error', function(e) {
  console.log('Could not connect to proxy, please try again...');
});

module.exports = router;
