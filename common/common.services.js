( function () {
	"use strict";
	angular.module("common.services",
					["ngResource"]) .constant("appSettings",
        {
            //local
          // serverPath: "http://localhost:26264/",
            // Testing
            serverPath: "http://173.249.1.26:40/Services/",

          
        });

}());