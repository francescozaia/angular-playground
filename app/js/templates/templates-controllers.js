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
        });
    });