'use strict';

angular.module('Pricing', [
    'ngMockE2E',
    'ngResource',
    'ui.bootstrap',
    'Pricing.filters',
    'Pricing.services',
    'Pricing.directives',
    'Pricing.controllers'
]).run(function($httpBackend, $resource) {
    var packages = { packages: [
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
    ]};

    // returns the current list of packages
    $httpBackend.whenGET('/packages').respond(
        packages
        //$resource("/API/packages.json").get()
    );

    // adds a new phone to the phones array
    $httpBackend.whenPOST('/packages').respond(function(method, url, data) {
        var phone = angular.fromJson(data);
        phones.push(phone);
        return [200, phone, {}];
    });
    $httpBackend.whenGET(/templates/).passThrough();
    $httpBackend.whenGET(/API/).passThrough();
});