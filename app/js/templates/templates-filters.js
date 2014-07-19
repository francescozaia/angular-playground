'use strict';

/* Filters */

angular.module('Templates.filters',[])
    .filter('yoFilter', function() {
        return function(input, condition) {
            //x = (input === condition) ? 'Yo' : 'no';
            return Boolean(input.indexOf(condition) > -1) ? 'block' : 'none';
        };
    })
    .filter('yoFilterTwo', function($filter) {
        return function (list, arrayFilter) {
            if (arrayFilter) {
                return $filter("filter")(list, function (listItem) {
                    return listItem.tags.indexOf(arrayFilter) != -1;
                });
            }
        };
    });