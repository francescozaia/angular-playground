"use strict";

angular.module('Login', [
    'Login.services',
    'Login.controllers'
]);
/*
 loginModuleInstance.run(function($http, $log, user) {
 $http({method: 'GET', url: '/sessiondetails.json'})
 .success(function(data, status, headers, config) {
 // this callback will be called asynchronously
 // when the response is available
 if(data.userdetails && data.userdetails.valid === 1) {
 $log.info( new Date() + ': user "' + data.userdetails.name + '" is logged in');
 user.isLogged = true;
 user.username = data.userdetails.name;
 } else {
 $log.info( new Date() + ': user is NOT logged in');
 user.isLogged = false;
 user.username = '';
 }
 }).
 error(function(data, status, headers, config) {
 // called asynchronously if an error occurs
 // or server returns response with an error status.
 $log.error( new Date() + 'Error retrieving user');
 user.isLogged = false;
 user.username = '';
 });



 });
 */

/*
 var authModuleInstance = angular.module('authModule', ['ngCookies', 'loginModule']);

 authModuleInstance.factory('authModule', ['$http', '$rootScope', '$cookieStore', function ($http, $rootScope, $cookieStore) {
 $rootScope.user = {};

 return {
 user : $rootScope.user,
 set: function (_user) {
 // you can retrieve a user set from another page, like login successful page.
 var userCookie = $cookieStore.get('current.user');
 $rootScope.user =  _user || userCookie;
 sessionStorage.moonfruituser = angular.toJson($rootScope.user);
 //$cookieStore.put('moonfruit.user', $rootScope.user);
 },
 remove: function () {
 sessionStorage.removeItem("moonfruituser");
 //$cookieStore.remove('moonfruit.user', $rootScope.user);
 }
 };

 }]);

 authModuleInstance.run(function(authModule, UserService) {
 UserService.getData().then(function(promise) {
 if(promise.data.userdetails && promise.data.userdetails.valid === 1) {
 //$log.info( new Date() + ': user "' + promise.data.userdetails.name + '" is logged in');
 authModule.set(promise.data.userdetails);
 } else {
 //$log.info( new Date() + ': user is NOT logged in');
 authModule.remove();
 }
 });
 });
 */