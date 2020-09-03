'use strict';

angular.module("myApp").factory('authInterceptorService', ['$q', '$location', 'localStorageService',
    function ($q, $location, localStorageService) {

    var authInterceptorServiceFactory = {};

    var _request = function (config) {

        config.headers = config.headers || {};
        //alert("location path==" + JSON.stringify(config));
        var authData = localStorageService.get('authorizationData');
        if (authData) {
            config.headers.Authorization = 'Bearer ' + authData.token;
        } else if ($location.path == '/changePassword') {
            $location.path('/changePassword');
        }
        else if ($location.$$path === '/changePassword') {
            $location.path('/changePassword');
        }
        else if ($location.$$path === '/confirmEmail') {
            $location.path('/confirmEmail');
        }
        else if ($location.$$path === '/resetPassword') {
            $location.path('/resetPassword');
        }
        else if ($location.$$path === '/booknow') {
            $location.path('/booknow');
        } else if ($location.$$path === '/proceedPayment') {
            $location.path('/proceedPayment');
        }
        //else if ($location.path != '/login') {
        //   // alert("GO TO LOGIN")
        //    $location.path('/login');
        //}

        return config;
    }

    var _responseError = function (rejection) {
     // alert("_responseError" + JSON.stringify(rejection))
      if (rejection.status === 401) {
          //alert("GO TO LOGIN IN ERROR");
          localStorageService.clearAll();
          //$scope.$apply(function () {
          $location.path('/login');
          function myFunction() {
              setTimeout(function () {
                  window.location.reload();
              }, 1000);
          }
          myFunction()
          //window.location.reload();
          //}) 
           
        }
        if (rejection.status === 500) {
            $location.path('/500');
        }
        
        return $q.reject(rejection);

    }

    authInterceptorServiceFactory.request = _request;
    authInterceptorServiceFactory.responseError = _responseError;

    return authInterceptorServiceFactory;
}]);

