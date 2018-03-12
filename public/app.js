var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider) {
  $routeProvider
  .when('/', {
      controller: 'main',
      templateUrl: 'views/main.view.html'
    })
    .when('/radio', {
        controller: 'main',
        templateUrl: 'views/main.view.html'
      })
    .when('/radio/:url', {
      controller: 'main',
      templateUrl: 'views/radio.view.html'
    })
    .otherwise({
      redirectTo: '/'
    });
    
});
