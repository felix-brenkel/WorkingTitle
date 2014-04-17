/* global angular */

var locationApp = angular.module('locationApp', ['ngRoute'])

.factory('LocationFactory', function () {
    var factory = {};
    var customers = [{
        postCode: '73061',
        city: 'Ebersbach'
    }, {
        postCode: '73776',
        city: 'Altbach'
    }];
    factory.getCustomers = function () {
        return customers;
    };
    return factory;
})

.controller('LocationController', function ($scope, LocationFactory) {
    $scope.locations = LocationFactory.getCustomers();

    $scope.addLocation = function () {
        $scope.locations.push({
            postCode: $scope.newLocation.postCode,
            city: $scope.newLocation.city
        });
    };
});


locationApp.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            controller: 'LocationController',
            templateUrl: 'views/locations.html'
        });
});