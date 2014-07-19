'use strict';

global["define"] = require('amdefine');

define(['angular'], function(angular) {
    angular.module('Pricing', [
        'UserInterface',
        'Login',
        'ngMockE2E',
        'ngResource',
        'Pricing.filters',
        'Pricing.services',
        'Pricing.directives',
        'Pricing.controllers'
    ])
        .run(function ($httpBackend, $resource) {
            var packages = [];

            // returns the current list of packages
            $httpBackend.whenGET('/packages').respond(
                $resource("/API/packages.json").get()
            );

            // adds a new package to the phones array
            /*
             $httpBackend.whenPOST('/packages').respond(function(method, url, data) {
             var phone = angular.fromJson(data);
             phones.push(phone);
             return [200, phone, {}];
             });
             */
            $httpBackend.whenGET(/templates/).passThrough();
            $httpBackend.whenGET(/partials/).passThrough();
            $httpBackend.whenGET(/API/).passThrough();
        });
});