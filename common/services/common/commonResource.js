
(function () {
    angular.module("common.services")
        .factory("commonResource",
        ["$resource", "appSettings",
            commonResource]);
    function commonResource($resource, appSettings) {
        //alert('hhh')
        return $resource(appSettings.serverPath, {},
            {
                'getUserDetailsByEmailId': {
                    method: 'GET',
                    isArray: false,
                    url: appSettings.serverPath + "api/user/getUserDetailsByEmailId/:email"
                },
                'getData':
                 {
                     method: 'GET',
                     isArray: false,
                     url: appSettings.serverPath + "/api/user/getMngUserPagination/:skip/:take"
                 },


         
                'getAllUser':
                  {
                        method: 'GET',
                        isArray: true,
                        url: appSettings.serverPath + "api/user/getAllUser"
                  },
                'deleteUser': {
                    method: 'GET',
                    url: appSettings.serverPath + "api/account/deleteUser/:id"
                },

                'getSearchedResult':
                        {
                            method: 'POST',
                            isArray: false,
                            url: appSettings.serverPath + '/api/user/userSearch'
                        },

            })


    }


}())

