'use strict';

/* Services */

angular.module('Pricing.services', [])
    .value('version', '0.1')
    .factory('pricingService', [
        '$q', '$http',
        function($q, $http) {
            var getPrices = function() {
                var deferred = $q.defer();
                $http.get('/API/packages.json')
                    .success(function(data) {
                        deferred.resolve(data);
                    })
                    .error(function(reason) {
                        deferred.reject(reason);
                    })
                return deferred.promise;
            }

            return {
                getPrices: getPrices
            };
        }]);
