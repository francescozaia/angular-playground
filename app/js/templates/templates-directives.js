'use strict';

/* Directives */

angular.module('Templates.directives', []).
    directive('template', function () {
        return {
            restrict: 'A',
            transclude: true,
            templateUrl: '/app/partials/template-partial.html'
        };
    });
