'use strict';

/* Services */

angular.module('Templates.services', [])
    .factory('templatesService', [
        '$q', '$http',
        function($q, $http) {
            var getTemplates = function() {
                var deferred = $q.defer();
                $http.get('/API/templates.json')
                    .success(function(data) {
                        deferred.resolve(data);
                    })
                    .error(function(reason) {
                        deferred.reject(reason);
                    })
                return deferred.promise;
            }

            return {
                getTemplates: getTemplates
            };
        }]);
