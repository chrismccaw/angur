var express = require('express');
var fingerprint = new require("../node/Fingerprint.js")();
var url = require('url');

var router = express.Router();

var SessionService = require("../node/services/SessionService");
var sessionService;


router.get('/', function(req, res, next) {
    res.render("index");
});

router.get('/fingerprint', function(req, res, next) {
    var url_parts = url.parse(req.url, true);
    var data = url_parts.query;
    var information = JSON.parse(data.information);
    var hash = fingerprint.getHashFromRequest(req, information);

    sessionService.getId(hash).then(function() {

        res.send(200, {
            id: hash
        });

    }).catch(function(error) {
        console.log(error);
        res.render('error', {
            message: error
        });
    });
});

module.exports = function(client) {
    sessionService = new SessionService(client);
    return router;
};