'use strict';

angular.module('Templates.controllers', []).
    controller('templatesController', function($scope, templatesAPIService) {
        templatesAPIService.getPackages().success(function (response) {
            $scope.tags = "all";
            $scope.templates = response.templates;
            $scope.templateTags = function () {
                var arrays = _.map($scope.templates, function(template) {
                    return template.tags;
                });
                return _.union.apply(this, arrays);
            };
        });
    });