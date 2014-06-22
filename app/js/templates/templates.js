'use strict';

angular.module('Templates', [
    'UserInterface',
    'Login',
    'ngMockE2E',
    'ngResource',
    'Templates.controllers',
    'Templates.services'
])
    .run(function($httpBackend, $resource) {
        var packages = [];

        // returns the current list of packages
        $httpBackend.whenGET('/websites').respond(
            $resource("/API/websites.json").get()
        );
        $httpBackend.whenGET(/templates/).passThrough();
        $httpBackend.whenGET(/API/).passThrough();
    });