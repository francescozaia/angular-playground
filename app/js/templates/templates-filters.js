'use strict';

/* Filters */

angular.module('Templates.filters',[])
    .filter('yoFilter', function() {
        return function(input, condition) {
            //x = (input === condition) ? 'Yo' : 'no';
            return Boolean(input.indexOf(condition) > -1) ? 'block' : 'none';
        };
    });