'use strict';

angular.module('Templates.controllers', []).
    controller('templatesController', function($scope, templatesAPIService) {
        templatesAPIService.getPackages().success(function (response) {
            $scope.templates = response.templates;
        });
    });