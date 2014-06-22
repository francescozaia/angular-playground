'use strict';

angular.module('Templates.controllers', []).
    controller('templatesController', function($scope, templatesAPIService) {
        templatesAPIService.getPackages().success(function (response) {
            response.$promise.then(function(data){
                $scope.templates = data.templates;
                console.log($scope.templates)
            });
        });
    });