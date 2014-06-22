"use strict";

angular.module('UserInterface.controllers', [])
    .controller('ModalController', ['$scope', '$modal', '$log', function($scope, $modal, $log) {
        $scope.open = function () {
            $modal.open({
                templateUrl: '/app/templates/login-form-tmpl.html',
                controller: function ($scope, $modalInstance) {
                    $scope.cancel = function () {
                        $modalInstance.dismiss('cancel');
                    };
                }
            }).result.then(function () {
                    // resolved: modal is closed (with result)
                }, function () {
                    // rejected: modal is dismissed (without result)
                    $log.info('Modal dismissed at: ' + new Date());
                });
        };
    }])
    .controller('CollapseController', ['$scope', function($scope) {
        $scope.isCollapsed = false;
    }]);