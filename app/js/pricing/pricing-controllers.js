'use strict';

angular.module('Pricing.controllers', []).
    controller('packagesController', function($scope, pricingService) {
        $scope.annualModel = 'monthly';
        $scope.currencyModel = 'GBP';
        $scope.nameFilter = null;
        $scope.packages = [];
        /*pricingAPIService.getPackages().success(function (response) {
            response.$promise.then(function(data){
                $scope.packages = data.packages;
                $scope.currencies = data.currencies;
            });
        });*/
        pricingService.getPrices().then(function(data){
            $scope.packages = data.packages;
            $scope.currencies = data.currencies;
        });
    });
