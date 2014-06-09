'use strict';

angular.module('Pricing.services', []).
    value('version', '0.1').
    factory('ergastAPIservice', function($http) {

        var ergastAPI = {};

        ergastAPI.getDrivers = function() {
            return $http({
                method: 'JSONP',
                url: 'http://ergast.com/api/f1/2014/driverStandings.json?callback=JSON_CALLBACK'
            });
        }

        return ergastAPI;
    });