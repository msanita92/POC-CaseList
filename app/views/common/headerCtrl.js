(function () {
    "use:strict";
    angular.module("myApp").controller("headerCtrl", ["$scope", "authService", "$location", "$localStorage", "$state", "$rootScope", "newRegistrationResource", "settingResource", headerCtrl]);

    function headerCtrl($scope, authService, $location, $localStorage, $state, $rootScope, newRegistrationResource, settingResource) {
        var vm = this;
      
        if (localStorage.getItem('isLogin') == false || localStorage.getItem('isLogin') == null) {
            $state.go('login');
        }


        $rootScope.settingData = function () {
            $scope.loader = true;
            settingResource.getSettingData(function (data) {
                $scope.getSettingData = data;
                //console.log("jjjjj"+JSON.stringify(data))
                vm.academicYearId = data[0].currentAcademicYearId;
                if (vm.academicYearId) {
                    $scope.getStudentAndStaffRecords(vm.academicYearId);
                }
            }, function (err) {
                $scope.loader = false;
                if (err.status == 403) {
                    $location.path('/403');
                }
                else
                    toastr.error(err.data.message);
            })
        }
        $rootScope.settingData();

      
        $scope.toggleMenu = function () {
            if (angular.element(document.getElementById('main-menu')).hasClass('menuCollapsed'))
            {
                document.getElementById("main-menu").classList.remove('menuCollapsed'); 
                document.getElementById("content-block").classList.remove('fullWidthContent'); 
            } else {
                document.getElementById("main-menu").classList.add('menuCollapsed'); 
                document.getElementById("content-block").classList.add('fullWidthContent'); 
            }
            
        }
        if ($localStorage.loginDetails != null) {
            $scope.firstName = $localStorage.loginDetails.firstName;
            $scope.full = $scope.firstName.substring(0, 1);
            $scope.userName = $localStorage.loginDetails.firstName;
        }
       
        if ($localStorage.isAdmin != null) {
            $scope.isAdmin = $localStorage.isAdmin;
        }
  
        if ($localStorage.isParent != null) {
            $scope.isParent = $localStorage.isParent;
        }

        if ($localStorage.isTeacher != null) {
            $scope.isTeacher = $localStorage.isTeacher;
        }

        
            $scope.getStudentAndStaffRecords = function (academicYearId)
            {
                $scope.loader = true;
                if ($scope.isAdmin == true)
                {
                    if (academicYearId == null || academicYearId == "" || academicYearId == undefined) {
                        academicYearId = "1";
                    }
                    newRegistrationResource.getStudentAndStaffRecords({ academicYearId: academicYearId }, function (data) {
                        vm.totalRecords = data;
                        $scope.loader = false;
                        //console.log("data" + JSON.stringify(vm.totalRecords));
                        }, function (err) {
                            $scope.loader = false;
                            toastr.error(err.data.message);
                        })
                }
            }

        $scope.logOut = function () {
            $scope.loader = true;
            authService.logOut();
            $location.path('/login')
            $localStorage.isAdmin = false;
           $localStorage.isParent = false;
           $localStorage.isTeacher = false;
           $localStorage.isDeptAdmission = false;
           $localStorage.isCoordinators=false;
           $localStorage.isTeacherOrAdmin = null;
           $localStorage.loginDetails = null;
           $localStorage.currentAcademicYearId = null;
           $localStorage.isSectionBack = false;
           $localStorage.isCoTeacherSection = false;
           $localStorage.isSubjectCT = false;
           $scope.loader = false;
           // $state.go('login');
           window.location.reload();
           
        }

        $rootScope.settingData = function () {
            settingResource.getSettingForPermissions(function (data) {
                //$scope.getSettingData = data;
                $scope.schoolName = "Angular App";
            });
        }
        $rootScope.settingData();

        settingResource.getPermissionsOnUserId(function (data) {
            vm.permissionsDetails = data;
           
        })

    }
    myApp.filter('INR', function () {
        return function (input) {
            if (input != null) {
                if (!isNaN(input)) {
                    var currencySymbol = '₹ ';
                    //var output = Number(input).toLocaleString('en-IN');   <-- This method is not working fine in all browsers!           
                    var result = input.toString().split('.');

                    var lastThree = result[0].substring(result[0].length - 3);
                    var otherNumbers = result[0].substring(0, result[0].length - 3);
                    if (otherNumbers != '')
                        lastThree = ',' + lastThree;
                    var output = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;

                    if (result.length > 1) {
                        output += "." + result[1];
                    }
                   
                    return output;
                }
            }

        }
    });

})();
