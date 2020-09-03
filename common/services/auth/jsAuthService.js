/**
 * Created by SANJEEV on 11/10/2015.
 */
'use strict';
var isDefined = angular.isDefined,
    isUndefined = angular.isUndefined,
    isNumber = angular.isNumber,
    isObject = angular.isObject,
    isArray = angular.isArray,
    extend = angular.extend,
    toJson = angular.toJson;

'use strict';
angular.module("myApp").factory('authService', ['$http', '$q', 'appSettings','localStorageService',  function ($http, $q, appSettings, localStorageService) {
    //'$localStorage',   ,$localStorage

    var serviceBase = appSettings.serverPath; 

   // alert("IN AUTH SERVICE");
        var authServiceFactory = {};

        var _authentication = {
            isAuth: false,
            userName : ""
        };


        var _login = function (loginData) {

    

            var data = "grant_type=password&username=" +
                    loginData.userName + "&password=" + loginData.password;

            var deferred = $q.defer();
            //alert("data " + JSON.stringify(data))
            $http.post(serviceBase + 'oauth/token', data, {
                headers:
            { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {
                //alert("POSTING LOGIN ******************* "+JSON.stringify(response));
                localStorageService.set('authorizationData',
                        { token: response.access_token, UserName: loginData.userName });
                _authentication.isAuth = true;
                _authentication.UserName = loginData.userName;

                deferred.resolve(response);

            }).error(function (err, status) {
             // alert(JSON.stringify(err + ' - ' + status));
                _logOut();
                deferred.reject(err);
            });

            return deferred.promise;
        };

        var _logOut = function () {
           
            localStorage.clear();
            localStorageService.remove('authorizationData');
            _authentication.isAuth = false;
            _authentication.userName = "";
         
        };
       
        var _fillAuthData = function () {
            var authData = localStorageService.get('authorizationData');
            if (authData)
            {
                _authentication.isAuth = true;
                _authentication.userName = authData.userName;
            }
        }

        authServiceFactory.login = _login;
        authServiceFactory.logOut = _logOut;
        authServiceFactory.fillAuthData = _fillAuthData;
        authServiceFactory.authentication = _authentication;

        return authServiceFactory;
    }]);