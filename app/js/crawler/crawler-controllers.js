'use strict';

angular.module('Crawler.controllers', []).
    controller('crawlerController', function($scope, crawlerService) {
        crawlerService.getTemplates().then(function(data){
            $scope.templates = data.templates;
        });
    });