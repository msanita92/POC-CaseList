(function () {
    "use:strict";
    angular.module("myApp").controller("sidebarCtrl", ["$scope", "$state", "$localStorage", "settingResource","authService", "authInterceptorService", "$location", sidebarCtrl]);

    function sidebarCtrl($scope, $state, $localStorage, settingResource, authService, authInterceptorService, $location) {
     
        var vm = this;
        $scope.isAdmin = $localStorage.isAdmin;
       // alert("$scope.isAdmin" + $scope.isAdmin)
      // $scope.isParent = $localStorage.isParent;
        $scope.isTeacher = $localStorage.isTeacher;
       
        $scope.isDeptAdmission = $localStorage.isDeptAdmission;

        $scope.isCoordinators = $localStorage.isCoordinators;
        //alert($scope.isCoordinators)
        $scope.showMarksTeacher = function (passingId) {
            $state.go('marksForTeacher', { id: passingId });
        };


        settingResource.getSettingData(function (data) {
            //$scope.getSettingData = data;
           // console.log("kanna" + angular.toJson(data[0].currentAcademicYearId))
            $scope.currId = data[0].currentAcademicYearId;
            //$scope.getSectionOnYears($scope.currId);
        })
     
       // $scope.showSideName = false;
        //$scope.showSideMasName = true;
        settingResource.getPermissionsOnUserId(function (data) {
            vm.permissionsDetails = data;
           // console.log("ddd" + angular.toJson(data))
           // angular.forEach(vm.permissionsDetails, function (item) {
           //     if (item.isSubModuleActive) {
           //         $scope.showSideName = true;
           //        }
           //});
        })
      

      
        //console.log("localll" + angular.toJson($localStorage.loginDetails));
      // console.log("Paren" + $scope.isParent);
        //console.log("Teac" + $scope.isTeacher);
        
    }
    $(document).load(function () {
        var winHeight = $(window).height();
        $('sidebarNav.nano').css('height',($(window).height()) - 64);
    });
    $(window).resize(function () {
        $('sidebarNav.nano').css('height',($(window).height()) - 64);
    });




})();



