var uuid = require('node-uuid');
var Q = require("q");

module.exports = function(client) {

    return {
        getId: function(id) {
            var deferred = Q.defer();
            client.get(id, function(err, name) {
                console.log("Retrieved ID - " + name);
                deferred.resolve(name);
            });
            return deferred.promise;
        },
        postIdName: function(hash, name) {
            var deferred = Q.defer();
            client.set(hash, name, function(err, reply) {
                if (!err) {
                    deferred.resolve(name);
                } else {
                    deferred.reject(new Error(err));
                }
            });
            return deferred.promise;
        }
    };
};