angular.module('Login.controllers', [])
    .controller('LoginController', ['$scope', '$http', 'user', function($scope, $http, user) {
        $scope.login = function () {
            getLogin().then(function(promise) {
                if (promise.data.valid === 0){
                    //alert("Mh... :/");
                    user.isLogged = false;
                    user.username = '';
                } else {
                    //alert("Logged in.");
                    user.isLogged = true;
                    user.username = $scope.response;
                    //location.href = "/dashboard";
                }
            });
        };
        var getLogin = function () {
            return $http({
                method: "GET",
                url: "/login/user.json?username=" + $scope.data.username + "&password=" + $scope.data.username
            }).success(function(data) {
                return data;
            }).error(function() {
                return {"status": false};
            });
        };
    }]);