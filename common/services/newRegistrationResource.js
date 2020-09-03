/// <reference path="newRegistrationResource.js" />
(function () {
    "use strict";
    angular.module("common.services")
        .factory("newRegistrationResource",
        ["$resource", "appSettings", newRegistrationResource]);
    function newRegistrationResource($resource, appSettings) {
        return $resource(appSettings.serverPath + "api/newRegistration", { id: "@id" },
                     {
                         'save': {
                             method: 'POST',
                             isArray: false,
                             url: appSettings.serverPath + '/api/newRegistration',
                             headers: { 'Content-Type': undefined },
                             transformRequest: function (data) {
                                 var formData = data.fd;
                                 formData.delete("model");
                                 formData.append("model", angular.toJson(data.model));
                                 //console.log("formatssss" + JSON.stringify(formData))
                                 return formData;
                             },

                         },
                         'update':
                          {
                              method: 'PUT',
                              isArray: false,
                              url: appSettings.serverPath + '/api/newRegistration/update',
                              headers: { 'Content-Type': undefined },
                              transformRequest: function (data) {
                                  var formData = data.fd;
                                  formData.delete("model");
                                  formData.append("model", angular.toJson(data.model));
                                  //console.log("formatssss" + JSON.stringify(formData))
                                  return formData;
                              },

                          },
                         'registrationSave': {
                             method: 'POST',
                             isArray: false,
                             url: appSettings.serverPath + '/api/newRegistration/registrationSave',
                             headers: { 'Content-Type': undefined },
                             transformRequest: function (data) {
                                 var formData = data.fd;
                                 formData.delete("model");
                                 formData.append("model", angular.toJson(data.model));
                                 //console.log("formatssss" + JSON.stringify(formData))
                                 return formData;
                             },
                         },
                         'deleteFileFor':
                          {
                              method: 'PUT',
                              isArray: false,
                              url: appSettings.serverPath + "api/newRegistration/deleteFileFor"
                          },
                         'getNew': {
                             method: 'POST',
                             isArray: false,
                             url: appSettings.serverPath + '/api/newRegistration/getByStatusNew'
                         },
                     
                         'getAllDropdownForRegistrationForm':
                          {
                              method: 'GET',
                              isArray: false,
                              url: appSettings.serverPath + '/api/common/getAllDropdownForRegistrationForm'
                          },
                         'getAllPreviousSchoolData': {
                             method: 'GET',
                             isArray: true,
                             url: appSettings.serverPath + '/api/studentClass/getStudentClasses'
                         },
                         'getNewAdmission':
                       {
                           method: 'GET',
                           isArray: false,
                           url: appSettings.serverPath + '/api/newRegistration/getBasedOnId/:id'
                       },
                         'sendRegistrationPaymentLink':
                      {
                          method: 'GET',
                          isArray: false,
                          url: appSettings.serverPath + '/api/newRegistration/sendRegistrationPaymentLink/:id'
                      },
                         'sendTotalPaymentLink':
                     {
                         method: 'GET',
                         isArray: false,
                         url: appSettings.serverPath + '/api/newRegistration/sendTotalPaymentLink/:id'
                     },
                         'saveToAdmission': {
                             method: 'POST',
                             isArray: false,
                             url: appSettings.serverPath + '/api/newAdmission',
                             headers: { 'Content-Type': undefined },
                             transformRequest: function (data) {
                                 var formData = data.fd;
                                 formData.delete("model");
                                 formData.append("model", angular.toJson(data.model));
                                 //console.log("formatssss" + JSON.stringify(formData))
                                 return formData;
                             },
                         },
                         'saveAdmissionFee': {
                             method: 'POST',
                             isArray: false,
                             url: appSettings.serverPath + '/api/newAdmission/saveAdmissionFee'
                         },
                         'saveRegistrationFee': {
                             method: 'POST',
                             isArray: false,
                             url: appSettings.serverPath + '/api/newAdmission/saveRegistrationFee'
                         },
                         'getFeeStructure': {
                             method: 'GET',
                             isArray: false,
                             url: appSettings.serverPath + '/api/newRegistration/getFeeStructure/:id'
                         },
                         'getAcademicYear': {
                             method: 'GET',
                             isArray: true,
                             url: appSettings.serverPath + '/api/setting/getsettings'
                         },

                         'GetStudentClassesForPg':
                            {
                                method: 'GET',
                                isArray: true,
                                url: appSettings.serverPath + '/api/studentClass/GetStudentClassesForPg'
                            },
                         'getClassesForPgOnstatus':
                         {
                             method: 'GET',
                             isArray: true,
                             url: appSettings.serverPath + '/api/studentClass/getClassesForPgOnstatus'
                         },
                         'GetStudentClassesForStd':
                           {
                               method: 'GET',
                               isArray: true,
                               url: appSettings.serverPath + '/api/studentClass/GetStudentClassesForStd'
                           },

                         'getStudentClassesForStdOnStatus':
                          {
                              method: 'GET',
                              isArray: true,
                              url: appSettings.serverPath + '/api/studentClass/getStudentClassesForStdOnStatus'
                          },

                         'getData':
                                 {
                                     method: 'GET',
                                     isArray: false,
                                     url: appSettings.serverPath + "/api/newRegistration/getRegistrationPagination/:skip/:take"
                                 },

                       
                         'sendOutSideRegistrationPaymentLink':
                     {
                         method: 'GET',
                         isArray: true,
                         url: appSettings.serverPath + '/api/newRegistration/sendOutSideRegistrationPaymentLink/:id'
                     },
                   'sendShortListForIntPaymentLink':
                   {
                       method: 'GET',
                       isArray: false,
                       url: appSettings.serverPath + '/api/newRegistration/sendShortListForIntPaymentLink/:id'
                   },
                   'sendShortListForAdmissionPaymentLink':
                   {
                       method: 'GET',
                       isArray: false,
                       url: appSettings.serverPath + '/api/newRegistration/sendShortListForAdmissionPaymentLink/:id'
                   },
                   'sendAdmissionFeeLink':
                   {
                       method: 'GET',
                       isArray: false,
                       url: appSettings.serverPath + '/api/newRegistration/sendAdmissionFeePaymentLink/:id'
                   },
                         
                   'importToAdmission': {
                           method: 'POST',
                           isArray: false,
                           url: appSettings.serverPath + '/api/newAdmission/importData',
                           headers: { 'Content-Type': undefined },
                       transformRequest: function (data) {
                           var formData = data.fd;
                           formData.delete("model");
                           formData.append("model", angular.toJson(data.model));
                           //console.log("formatssss" + JSON.stringify(formData))
                           return formData;
                       },
                   },
                   'getAcademicYearName':
                   {
                       method: 'GET',
                       isArray: true,
                       url: appSettings.serverPath + '/api/academicYear/getAcademicYearsBasedOnCurrAcademics/:currentAcademicYearId'
                   },
                   'getNewAdmissionForPrint':
                 {
                     method: 'GET',
                     isArray: false,
                     url: appSettings.serverPath + '/api/newRegistration/getNewAdmissionForPrint/:id'
                 },
                   'getStudentAndStaffRecords':
                       {
                           method: 'GET',
                           isArray: false,
                           url: appSettings.serverPath + '/api/newAdmission/getStudentAndStaffRecords/:academicYearId'
                       },
                   'getSearchedResult':
                  {
                      method: 'POST',
                      isArray: false,
                      url: appSettings.serverPath + '/api/newRegistration/search'
                  },
                  //send sms to candidates.............
                   'sendMailToRecUser': {
                       method: 'POST',
                       isArray: false,
                       url: appSettings.serverPath + "/api/newRegistration/sendMail",
                   },
                   'sendMailToRecUserReg': {
                       method: 'POST',
                       isArray: false,
                       url: appSettings.serverPath + "/api/newRegistration/sendMailReg",
                   },
                   'getFeegroups':
                    {
                        method: 'GET',
                        isArray: true,
                        url: appSettings.serverPath + '/api/feeGroup/getStreamFeegroups/:streamId'
                    },
              })
    }
}())

