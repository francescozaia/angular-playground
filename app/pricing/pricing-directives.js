'use strict';

/* Directives */

angular.module('Pricing.directives', []).
    directive('appVersion', ['version', function(version) {
        return function(scope, elm) {
            elm.text(version);
        };
    }]).
    directive('article', function () {
        return {
            restrict: 'A',
            transclude: true,
            templateUrl: '/app/templates/package-tmpl.html'
        }
    });
