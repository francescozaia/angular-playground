'use strict';

angular.module('Pricing', [
    'loginModule',
    'ngMockE2E',
    'ngResource',
    'ui.bootstrap',
    'Pricing.filters',
    'Pricing.services',
    'Pricing.directives',
    'Pricing.controllers'
    ])
    .run(function($httpBackend, $resource) {
        var packages = [];

        // returns the current list of packages
        $httpBackend.whenGET('/packages').respond(
            $resource("/API/packages.json").get()
        );

        // adds a new package to the phones array
        /*
        $httpBackend.whenPOST('/packages').respond(function(method, url, data) {
            var phone = angular.fromJson(data);
            phones.push(phone);
            return [200, phone, {}];
        });
             */
        $httpBackend.whenGET(/templates/).passThrough();
        $httpBackend.whenGET(/API/).passThrough();
    })
    .controller('CollapseController', ['$scope', function($scope) {
        $scope.isCollapsed = false;
    }])
    .controller('ModalController', ['$scope', '$modal', '$log', function($scope, $modal, $log) {
        $scope.open = function () {

            $modal.open({
                templateUrl: '/app/templates/login-form-tmpl.html',
                controller: function ($scope, $modalInstance) {
                    $scope.cancel = function () {
                        $modalInstance.dismiss('cancel');
                    };
                }
            }).result.then(function () {
                    // resolved: modal is closed (with result)
                }, function () {
                    // rejected: modal is dismissed (without result)
                    $log.info('Modal dismissed at: ' + new Date());
                });
        };
    }]);


var loginModuleInstance = angular.module('loginModule', []);

loginModuleInstance.factory('UserService', ['$http', '$log', function($http, $log) {

    var getSessionDetails = function () {
        return $http({
            method: 'GET',
            url: '/sessiondetails.json'
        }).success(function(data) {
            // this callback will be called asynchronously
            // when the response is available
            return data;
        }).error(function() {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            $log.error( new Date() + 'Error retrieving user');
            return {"status": false};
        });
    };


    return  {
        isLogged: false,
        username: '',
        getData: function() {
            return getSessionDetails();

        }
    };
}]);

loginModuleInstance.value('user', {
    presentation: function (name) {
        return "Hi " + name + this.username;
    }
});

loginModuleInstance.controller('LoginController', ['$scope', '$http', 'user', function($scope, $http, user) {
    $scope.login = function () {

        getLogin().then(function(promise) {
            if (promise.data.valid === 0){
                //alert("Mh... :/");
                user.isLogged = false;
                user.username = '';
            } else {
                //alert("Logged in.");
                user.isLogged = true;
                user.username = $scope.response;
                //location.href = "/dashboard";
            }
        });

    };

    var getLogin = function () {
        return $http({
            method: "GET",
            url: "/login/user.json?username=" + $scope.data.username + "&password=" + $scope.data.username
        }).success(function(data) {
            return data;
        }).error(function() {
            return {"status": false};
        });
    };



}]);
/*
loginModuleInstance.run(function($http, $log, user) {
     $http({method: 'GET', url: '/sessiondetails.json'})
     .success(function(data, status, headers, config) {
     // this callback will be called asynchronously
     // when the response is available
     if(data.userdetails && data.userdetails.valid === 1) {
     $log.info( new Date() + ': user "' + data.userdetails.name + '" is logged in');
     user.isLogged = true;
     user.username = data.userdetails.name;
     } else {
     $log.info( new Date() + ': user is NOT logged in');
     user.isLogged = false;
     user.username = '';
     }
     }).
     error(function(data, status, headers, config) {
     // called asynchronously if an error occurs
     // or server returns response with an error status.
     $log.error( new Date() + 'Error retrieving user');
     user.isLogged = false;
     user.username = '';
     });



});
 */

/*
var authModuleInstance = angular.module('authModule', ['ngCookies', 'loginModule']);

authModuleInstance.factory('authModule', ['$http', '$rootScope', '$cookieStore', function ($http, $rootScope, $cookieStore) {
    $rootScope.user = {};

    return {
        user : $rootScope.user,
        set: function (_user) {
            // you can retrieve a user set from another page, like login successful page.
            var userCookie = $cookieStore.get('current.user');
            $rootScope.user =  _user || userCookie;
            sessionStorage.moonfruituser = angular.toJson($rootScope.user);
            //$cookieStore.put('moonfruit.user', $rootScope.user);
        },
        remove: function () {
            sessionStorage.removeItem("moonfruituser");
            //$cookieStore.remove('moonfruit.user', $rootScope.user);
        }
    };

}]);

authModuleInstance.run(function(authModule, UserService) {
    UserService.getData().then(function(promise) {
        if(promise.data.userdetails && promise.data.userdetails.valid === 1) {
            //$log.info( new Date() + ': user "' + promise.data.userdetails.name + '" is logged in');
            authModule.set(promise.data.userdetails);
        } else {
            //$log.info( new Date() + ': user is NOT logged in');
            authModule.remove();
        }
    });
});
*/