'use strict';

angular.module('Templates.controllers', []).
    controller('templatesController', function($scope, templatesAPIService) {
        templatesAPIService.getPackages().success(function (response) {
            //var images = 12;
            $scope.templates = response.templates;//.slice(0, images);
            $scope.loadMore = function() {
                var last = $scope.templates.length - 1;
                for(var i = 1; i <= images; i++) {
                    if (response.templates[last + i]) {
                        $scope.templates.push(response.templates[last + i]);
                    }

                }
            };
            $scope.filteredTemplates = function () {
                return $scope.templates.filter(function (template) {
                    return template.tags.indexOf($scope.gatto) !== -1;
                });
            };
            $scope.templateTags = function () {
                var arrays = _.map($scope.templates, function(template) {
                    return template.tags;
                });
                var ret = _.union.apply(this, arrays);
                return ret;
            };
        });
    });