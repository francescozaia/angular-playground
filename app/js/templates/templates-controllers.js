'use strict';

angular.module('Templates.controllers', []).
    controller('templatesController', function($scope, templatesService) {
        templatesService.getTemplates().then(function(data){
            $scope.tags = "all";
            $scope.templates = data.templates;
            $scope.templateTags = function () {
                var arrays = _.map($scope.templates, function(template) {
                    return template.tags;
                });
                return _.union.apply(this, arrays);
            };
        });
    });