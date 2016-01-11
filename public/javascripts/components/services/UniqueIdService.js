app.service('UniqueIdService', ['$http', '$q',
    function($http, $q) {
        
        return {
            postName: function(name) {

                return $http({
                    method: "post",
                    url: "/name",
                    responseType: "json",
                    data: JSON.stringify({
                        name: name
                    })
                });
            }
        };
    }
]);