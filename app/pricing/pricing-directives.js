'use strict';

/* Directives */


angular.module('Pricing.directives', []).
    directive('appVersion', ['version', function(version) {
        return function(scope, elm, attrs) {
            elm.text(version);
        };
    }]).
    directive('article', function () {
        return {
            restrict: 'A',
            templateUrl: '/app/templates/package-tmpl.html'
        }
    })
