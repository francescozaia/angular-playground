'use strict';

/* Filters */

angular.module('Pricing.filters', []).
    filter('interpolate', ['version', function(version) {
        return function(text) {
            return String(text).replace(/\%VERSION\%/mg, version);
        };
    }]).
    filter('decimalFraction', [ function () {
        return function(input) {
            return (input+"").split(".")[1] ? (input+"").split(".")[1].substr(0,2) : "00";
        };
    }]).
    filter('solidFraction', [ function () {
        return function(input) {
            return (input+"").split(".")[0];
        };
    }]);
