'use strict';

/* Services */

angular.module('Pricing.services', []).
    value('version', '0.1').
    factory('pricingAPIService', function($http) {
        var pricingAPI = {};
        pricingAPI.getPackages = function() {
            return $http({
                method: 'GET',
                url: '/packages'
            });
        };
        return pricingAPI;
    });
