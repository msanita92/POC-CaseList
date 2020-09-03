(function () {
    "use:strict";
    angular.module('myApp')
    myApp.controller('CasListCtrl', CasListCtrl);
    CasListCtrl.$inject = ['$scope', '$state', '$localStorage', '$sce', '$rootScope', '$http', 'uiGridConstants', 'circularResource', 'appSettings'];
    function CasListCtrl($scope, $state, $localStorage,$sce, $rootScope, $http, uiGridConstants, circularResource, appSettings) {

        var viwCirclr = this;

        //Get All Case list data
        circularResource.get(function (data) {
            $scope.loader = false;
            $scope.caseViewLists = data;
                //console.log(JSON.stringify(data))
            },function (err) {
                $scope.loader = false;
            })

        //go to view summary detail page
        $scope.getData = function (refNo)
        {
            $state.go('circulars', { refNo: refNo });
        }
    }
    
})();

