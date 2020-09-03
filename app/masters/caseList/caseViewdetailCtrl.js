(function () {
    "use:strict";
    angular.module('myApp')
    myApp.controller('CaseViewdetailCtrl', CaseViewdetailCtrl);
    CaseViewdetailCtrl.$inject = ['$scope', '$state', '$filter', '$rootScope', '$stateParams', '$sce', '$http', 'uiGridConstants', 'circularResource', '$location'];
    function CaseViewdetailCtrl($scope, $state, $filter, $rootScope,$stateParams, $sce, $http, uiGridConstants, circularResource, $location) {
        var cl = this;
        var refNo = $stateParams.refNo;
       
        //Get the details of the case view summary on ref No
        if (refNo) {
           circularResource.getCircularsBasedOnId({ id: refNo }, function (data) {
               $scope.deatilsOfCaseView = data;
                //console.log("deatils"+JSON.stringify(data))
            },function (error) {
              toastr.error(error.data.message)
           })
        }
    }
})();

