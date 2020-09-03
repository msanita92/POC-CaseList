(function () {
    "use strict";
    angular.module("common.services")
        .factory("settingResource",
        ["$resource", "appSettings", settingResource]);
    function settingResource($resource, appSettings) {
        return $resource(appSettings.serverPath + "api/setting", { id: "@id" },
                {




                    'getsettings': {
                        method: 'GET',
                        isArray: false,
                        url: appSettings.serverPath + '/api/setting/getBasedOnId/:id'
                    },




                    'save':
                        {
                            method: 'POST',
                            isArray: false,
                            url: appSettings.serverPath + '/api/setting'
                        },


                    'update':
                        {
                            method: 'PUT',
                            isArray: false,
                            url: appSettings.serverPath + '/api/setting/update'
                        },
                    'getSettingData':
                        {
                            method: 'GET',
                            isArray: true,
                            url: appSettings.serverPath + '/api/setting'
                        },
                  
                    'getAcademicYears':
                         {
                             method: 'GET',
                             isArray: true,
                             url: appSettings.serverPath + '/api/academicYear/getAcademicYears'
                         },
                    
                    'getPermissionsOnUserId':
                     {
                         method: 'GET',
                         isArray: true,
                         url: appSettings.serverPath + '/api/permission/getPermissionsOnUserId'
                     },
                    'getSettingForPermissions':
                       {
                           method: 'GET',
                           isArray: true,
                           url: appSettings.serverPath + '/api/setting/getSettingForPermissions'
                       },
                })
    }
}())