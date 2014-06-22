'use strict';

/* Services */

angular.module('Templates.services', []).
    factory('templatesAPIService', function($http) {
        var templatesAPI = {};
        templatesAPI.getPackages = function() {
            return $http({
                method: 'GET',
                url: '/websites'
            });
        };
        return templatesAPI;
    });
