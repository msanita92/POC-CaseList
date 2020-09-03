(function () {
    "use:strict";
    angular.module("myApp").controller("loginCtrl", ["$scope", "$state", "$window", "authService", "authInterceptorService", "$location", "$localStorage", "commonResource", "appSettings", loginCtrl]);

    function loginCtrl($scope, $state, $window, authService, authInterceptorService, $location, $localStorage, commonResource, appSettings) {

        var lg = this;
        lg.loginInfo = {};

        $scope.isAdmin = false;
       // $scope.isParent = false;
        $scope.isTeacher = false;

        $scope.isDeptAdmission = false;

        $scope.isCoordinators = false;

        $scope.showError = false;
        $scope.nhvpsLogo = appSettings.nhvpsLogo;

        if (authService.authentication.isAuth == true) {
            if ($localStorage.isAdmin) {
                $state.go("admindashboard");
            }
            else {
                $state.go("dashboard");
                }
        }
        else {
            $state.go("login");
        }

        $scope.login = function () {
           // console.log("lg.loginInfo" + JSON.stringify(lg.loginInfo))
            
            if ($scope.loginform.$valid) {
                $scope.loader = true;
                if (lg.loginInfo.userName.includes("/")) {
                    $scope.loader = false;
                    $scope.showError = true;
                    return false;
                }
                else {
                    authService.login(lg.loginInfo).then(function (response) {
                        lg.isLogin = true;
                        localStorage.setItem("isLogin", lg.isLogin);
                        getRoleByEmailId();
                        $scope.loader = false;
                    
                      
                    //    if ($localStorage.isAdmin==true)
                    //    {
                    //        $state.go('admindashboard');
                    //    }
                    //else{
                    //    $state.go('dashboard');
                    //}
                      
                    }, function (err) {
                        $scope.showError = true;
                        $scope.loader = false;
                    });
                }
                    
            }
            else {
                $scope.loader = false;
               // $scope.message = "Fill all mandatory(*) fields."
            }
        };
  

        //get user Details based on mail id

        function getRoleByEmailId() {
           //debugger
            $scope.emailId = lg.loginInfo.userName + "/";
            //$scope.email = $scope.emailId.substr(-2,5)
            //console.log(" $scope.emailId " + $scope.email)
            //if($scope.emailId.includes("//")){
            //    $scope.logOut();
            //}
            //return false;
            commonResource.getUserDetailsByEmailId({ email: $scope.emailId }, function (data) {
                var roleName = data.roleName;
                $localStorage.loginDetails = data;
                //console.log(" $scope.emailId " + JSON.stringify($localStorage.loginDetails))
                if (roleName == 'Admin') {
                  $scope.isAdmin = true;
                  $scope.isTeacher = false;
                  $scope.isDeptAdmission = false;
                  $scope.isCoordinators = false;
                  $localStorage.isAdmin = $scope.isAdmin;
                  $localStorage.isTeacher = $scope.isTeacher;
                  $localStorage.isDeptAdmission = $scope.isDeptAdmission;
                  $localStorage.isCoordinators = $scope.isCoordinators;
                  $state.go("admindashboard");
                  //$window.location.reload();
                }
                else if (roleName == 'Admission Dept') {
                    $scope.isDeptAdmission = true;
                    $scope.isTeacher = false;
                    $scope.isAdmin = false;
                    $scope.isCoordinators = false;
                    $localStorage.isDeptAdmission = $scope.isDeptAdmission;
                    $localStorage.isAdmin = $scope.isAdmin;
                    $localStorage.isTeacher = $scope.isTeacher;
                    $localStorage.isCoordinators = $scope.isCoordinators;
                    $state.go('dashboard');
                }
                else if (roleName == 'Teachers') {
                   $scope.isTeacher = true;
                   $scope.isAdmin = false;
                   $scope.isDeptAdmission = false;
                   $scope.isCoordinators = false;
                   $localStorage.isTeacher = $scope.isTeacher;
                   $localStorage.isAdmin = $scope.isAdmin;
                   $localStorage.isDeptAdmission = $scope.isDeptAdmission;
                   $localStorage.isCoordinators = $scope.isCoordinators;
                   $state.go('dashboard');
               }
                else if (roleName == 'Coordinator') {
                  
                   $scope.isCoordinators = true;
                   $scope.isTeacher = false;
                   $scope.isAdmin = false;
                   $scope.isDeptAdmission = false;
                   
                   $localStorage.isCoordinators = $scope.isCoordinators;
                   $localStorage.isAdmin = $scope.isAdmin;
                   $localStorage.isDeptAdmission = $scope.isDeptAdmission;
                   $localStorage.isTeacher = $scope.isTeacher;
                   $state.go('dashboard');
               }

                else {
                
                    $scope.logOut();

                    }
                 $window.location.reload();

            },
            function (err) {
               
                alert("Couldn't get user details. Please try to login again!")
               
            })
        }

        $scope.logOut = function () {
            authService.logOut();
            $location.path('/login');

        }

        $scope.goToPreSchool = function () {
            $location.path('/new-registration/' + 0)
        }

        $scope.goToSchool = function () {
            $location.path('/new-registration/' + 1);
        }
    }

})();