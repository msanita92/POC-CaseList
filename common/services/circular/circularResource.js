(function () {
    "use strict";
    angular.module("common.services")
        .factory("circularResource",
        ["$resource", "appSettings", circularResource]);
    function circularResource($resource, appSettings) {
        return $resource(appSettings.serverPath + "api/circular", { id: "@id" },
                {

                 'getCircularsBasedOnId':
                 {
                     method: 'GET',
                     isArray: false,
                     url: appSettings.serverPath + '/api/circular/getBasedOnId/:id'
                 },
                    'get':
                        {
                            method: 'GET',
                            isArray: true,
                            url: appSettings.serverPath + '/api/circular/getData'
                        },


                })
    }
}())