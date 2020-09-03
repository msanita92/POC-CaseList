
var myApp = angular.module('myApp', ['ui.router', 'ui.grid', 'ui.grid.exporter', 'oc.lazyLoad', 'ui.grid.selection', 'ui.grid.resizeColumns', 'ui.grid.pagination',
    'ngMaterial', 'common.services', 'ngMessages', 'ngAnimate', "ui.router.state.events", "LocalStorageModule", "ngStorage", "isteven-multi-select",
    'btorfs.multiselect', 'ui.grid.pinning', '720kb.datepicker', 'ui.bootstrap', 'ngFileUpload', 'ngCkeditor', 'Dragtable', 'ui.grid.edit',
        'ui.grid.rowEdit', 'angular.filter'])
//'toaster',
myApp.config(['$ocLazyLoadProvider', function ($ocLazyLoadProvider) {
    $ocLazyLoadProvider.config({
        // global configs go here
    });
}]);

myApp.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/login');
    $stateProvider
        // dashboard Page ========================================
        .state('dashboard', {
            url: '/dashboard',
            templateUrl: 'app/views/dashboard/dashboard.html',
            controller: 'dashboardCtrl'
        })
        
        // HOME Page ========================================
        .state('admindashboard', {
            url: '/admindashboard',
            templateUrl: 'app/views/dashboard/adminDashboard.html',
            controller: 'adminDasboardCtrl as adminDash'
        })

        // Login Page ========================================
        .state('login', {
            url: '/login',
            templateUrl: 'app/views/login/login.html',
            controller: 'loginCtrl as lg'
        })

        //Case Details Page
       .state("circulars",
       {
           url: "/caseSummary/:refNo",
           templateUrl: "app/masters/caseList/caseViewdetail.html",
           controller: "CaseViewdetailCtrl as cl"
       })

     //Case List Page
        .state("circular",
           {
               url: "/caseList",
               templateUrl: "app/masters/caseList/casList.html",
               controller: "CasListCtrl as viwCirclr"
           })

});

myApp.config(function ($mdThemingProvider) {
    $mdThemingProvider.definePalette('primarytemplateColor', {
        '50': 'E1EEFA',
        '100': 'B3D6F3',
        '200': '81BAEC',
        '300': '4E9EE4',
        '400': '288ADE',
        '500': '0275D8',
        '600': '026DD4',
        '700': '0162CE',
        '800': '0158C8',
        '900': '0145BF',
        'A100': 'E7EEFF',
        'A200': 'B4CAFF',
        'A400': '81A6FF',
        'A700': '6894FF',
        'contrastDefaultColor': 'light',    // whether, by default, text (contrast)
        // on this palette should be dark or light
        'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
            '200', '300', '400', 'A100'],
        'contrastLightColors': undefined    // could also specify this if default was 'dark'
    });
    $mdThemingProvider.theme('default')
        .primaryPalette('primarytemplateColor')
        .accentPalette('primarytemplateColor', {
            'default': '600'
        });
});

myApp.run(['$state', '$rootScope', function ($state, $rootScope) {
    $rootScope.$on('$stateChangeStart', function (e, toState) {
        if ((toState.name == "login")
            || (toState.name == "unAuthorize")) {
            $rootScope.noNav = false;
        } else {
            $rootScope.noNav = true;
        };
    });
}]);

myApp.config(function ($httpProvider) {

    $httpProvider.interceptors.push('authInterceptorService');
});

myApp.run(['authService', function (authService) {
    authService.fillAuthData();

}]);

myApp.directive('toggle', function () {

    return {

        restrict: 'A',

        link: function (scope, element, attrs) {

            if (attrs.toggle == "tooltip") {

                $(element).tooltip();

                element.bind('click', function () {

                    $(element).tooltip('hide');

                });

            }

            if (attrs.toggle == "popover") {

                $(element).popover();

            }

        }

    };

});



