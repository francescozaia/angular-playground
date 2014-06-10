'use strict';

angular.module('Pricing.controllers', []).
    controller('packagesController', function($scope, pricingAPIService) {
        $scope.annualModel = 'monthly';
        $scope.currencyModel = 'GBP';
        $scope.nameFilter = null;
        $scope.tooltips = {
            "bandwidth" : "<h4>Bandwidth</h4><p>Bandwidth sets the limit for the amount of data that can be downloaded by your site when people visit it. Higher bandwidth limits will be important if your site has a lot of images, video or audio.</p>",
            "storage"   : "<h4>Storage</h4><p>Storage space determines the total number of files you can upload to your site. It will include all images, audio, video and other file types.</p>",
            "mobile"    : "<h4>Mobile optimized</h4><p>Moonfruit automatically creates a mobile optimised version of your site. You don\'t have to do anything.</p>"
        };
        $scope.packages = [];
        pricingAPIService.getPackages().success(function (response) {

            response.$promise.then(function(data){
                $scope.packages = data.packages;
                $scope.currencies = data.currencies;
            });

        });
    });