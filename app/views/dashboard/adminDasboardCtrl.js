(function () {
    "use:strict";
    angular.module("myApp").controller("adminDasboardCtrl", ["authService", "$scope", "$rootScope", "$location","$localStorage", "$state", "newRegistrationResource", adminDasboardCtrl]);

    function adminDasboardCtrl(authService, $scope, $rootScope, $location, $localStorage, $state, newRegistrationResource) {
        var adminDash = this;
      

        //if (localStorage.getItem('isLogin') == false || localStorage.getItem('isLogin') == null) {
            
        //    $location.path('/login')
        //    //$state.go('login');
        //}

       // if ($localStorage.isAdmin != null) {
       //     $scope.isAdmin = $localStorage.isAdmin;
       // }
     
       //// console.log("" + JSON.stringify($localStorage.loginDetails))
       // if ($scope.isAdmin == true) {
       //     //debugger;
       //     $rootScope.getStudentAndStaffRecords = function () {
       //         $scope.loader = true;
       //         newRegistrationResource.getStudentAndStaffRecords(function (data) {
       //             $scope.loader = false;
       //             adminDash.totalRecords = data;
       //             // console.log("data" + JSON.stringify(data));
       //         }, function (err) {
       //             $scope.loader = false;
       //             //console.log('' + JSON.stringify(err))
       //             toastr.error(err.data.message);
       //         })
       //     }
       //     $rootScope.getStudentAndStaffRecords();
       // }
       
       
      
        //$(document).ready(function () {
        //    $('.count').each(function () {

        //        $(this).prop('Counter', 0).animate({
        //            Counter: $(this).text()
        //        }, {
        //            duration: 5000,
        //            easing: 'swing',

        //            step: function (now) {
        //                $(this).text(Math.ceil(now));
        //            }
        //        });
        //    });
        //});
        
    }

})();