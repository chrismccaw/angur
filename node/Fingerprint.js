var crypto = require('crypto');
var parser = require('ua-parser-js');

module.exports = function() {

    var getElementsFromRequest = function(req) {
        var ua = parser(req.headers['user-agent']);
        var elements = {
            httpVersion: req.httpVersion,
            remoteAddress: getIpAddress(req),
            comp_name: ua.os.name,
            comp_version: ua.os.version
        };
        return elements;
    };

    var getElementsCollectedFromTheClient = function(information, elements) {
        for (var el in information) {
            elements[el] = ""+information[el];
        }
        return elements;
    };

    var createHash = function(elements) {
        var shasum = crypto.createHash('sha1');
        for (var i in elements) {
            shasum.update(elements[i]);
        }
        return shasum.digest('hex');
    };

    var getIpAddress = function(req) {
        return req.headers['x-forwarded-for'] ||
            req.connection.remoteAddress ||
            req.socket.remoteAddress ||
            req.connection.socket.remoteAddress;
    };

    return {
        getHashFromRequest: function(req, information) {
            var elements = getElementsFromRequest(req);
            getElementsCollectedFromTheClient(information, elements);
            return createHash(elements);
        }
    };
};