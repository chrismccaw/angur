app.service('FingerprintService', ['$http', '$q',
    function($http, $q) {

        return {
            getDetails: function(collectedData) {
            	console.log(collectedData);
                return $http({
                    method: "get",
                    url: "/fingerprint",
                    responseType: "json",
                    params: {
                        information: collectedData
                    }
                });
            }
        };
    }
]);