'use strict';

angular.module('Pricing.controllers', []).
    controller('currencyController', function($scope) {
        $scope.nameFilter = null;
        $scope.packages = [
            {
                Driver: {
                    givenName: 'Sebastian',
                    familyName: 'Vettel'
                },
                points: 322,
                nationality: "German",
                Constructors: [
                    {name: "Red Bull"}
                ]
            },
            {
                Driver: {
                    givenName: 'Fernando',
                    familyName: 'Alonso'
                },
                points: 207,
                nationality: "Spanish",
                Constructors: [
                    {name: "Ferrari"}
                ]
            }
        ];
    });

