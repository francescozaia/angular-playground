'use strict';

angular.module('Pricing.controllers', []).
    controller('alertsController', function($scope) {
        $scope.alerts = [
            { type: 'danger', msg: 'Oh snap! Change a few things up and try submitting again.' },
            { type: 'success', msg: 'Well done! You successfully read this important alert message.' }
        ];

        $scope.addAlert = function() {
            $scope.alerts.push({msg: 'Another alert!'});
        };

        $scope.closeAlert = function(index) {
            $scope.alerts.splice(index, 1);
        };
    }).
    controller('packagesController', function($scope, pricingAPIService) {
        $scope.annualModel = 'monthly';
        $scope.currencyModel = 'GBP';
        $scope.nameFilter = null;
        $scope.packages = [];
        pricingAPIService.getPackages().success(function (response) {

            response.$promise.then(function(data){
                $scope.packages = data.packages;
                $scope.currencies = data.currencies;
            });

        });
    }).
    controller('priceController', function($scope) {

    });