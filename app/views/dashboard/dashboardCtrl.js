(function () {
    "use:strict";
    angular.module("myApp").controller("dashboardCtrl", ["$scope", "$state", "$rootScope", "settingResource", dashboardCtrl]);

    function dashboardCtrl($scope, $state,$rootScope, settingResource) {
     
        if (localStorage.getItem('isLogin') == false || localStorage.getItem('isLogin') == null) {
            $state.go('login');
        }
        $rootScope.settingData = function () {
            settingResource.getSettingData(function (data) {
                $scope.loader = false;
                //$scope.getSettingData = data;
                $scope.schoolName = data[0].schoolName;
            });

        }

        $rootScope.settingData();
    }

})();