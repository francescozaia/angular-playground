'use strict';

/* Services */

angular.module('Login.services', [])
    .value('user', {
        presentation: function (name) {
            return "Hi " + name + this.username;
        }
    })
    .factory('UserService', ['$http', '$log', function($http, $log) {

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
