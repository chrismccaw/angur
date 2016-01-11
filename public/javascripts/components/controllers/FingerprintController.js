app.controller('FingerprintCtrl', ['$scope', 'FingerprintService',
    function($scope, FingerprintService) {

        $scope.name = '';
        $scope.ready = true;

        collectedData = {
            width: screen.width,
            height: screen.height,
            colorDepth: screen.colorDepth
        };

        FingerprintService.getDetails(collectedData).then(function(res) {
            $scope.id = res.data.id;
            $scope.name = res.data.name;
            $scope.ready = true;
        });
    }
])