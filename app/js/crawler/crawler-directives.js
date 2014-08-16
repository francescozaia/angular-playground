'use strict';

/* Directives */

angular.module('Crawler.directives', []).
    directive('crawler', function () {
        return {
            restrict: 'A',
            transclude: true,
            template: '<div>{{template}}</div>'
            //templateUrl: '/app/partials/template-partial.html'
        };
    });
