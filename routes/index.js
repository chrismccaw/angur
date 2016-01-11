var express = require('express');
var fingerprint = new require("../node/Fingerprint.js")();

var router = express.Router();

var SessionService = require("../node/services/SessionService");
var sessionService;

router.post('/name', function(req, res, next) {
    var arg = req.body;
    var name = arg.name;
    var hash = fingerprint.getHashFromRequest(req);
    sessionService.postIdName(hash, name).then(function() {
        res.send(200, {
            id: hash
        });
    });
});

router.get('/', function(req, res, next) {
    var hash = fingerprint.getHashFromRequest(req);

    sessionService.getId(hash).then(function(name) {
        res.render(name ? 'index' : 'new_user', {
            name: name,
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