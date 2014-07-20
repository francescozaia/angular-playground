'use strict';

/* Filters */

angular.module('Templates.filters',[])
    .filter('filterByTag', function($filter) {
        return function (list, arrayFilter) {
            if (arrayFilter) {
                return $filter("filter")(list, function (listItem) {
                    return listItem.tags.indexOf(arrayFilter) != -1;
                });
            }
        };
    });