app.controller('NameCtrl', ['$scope', 'UniqueIdService',
    function($scope, UniqueIdService) {

        $scope.name = '';

        $scope.sendName = function(name) {

            UniqueIdService.postName($scope.name).then(function(res) {
                $scope.id = res.data.id;
            });
        }

    }
])