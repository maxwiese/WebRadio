var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider) {
  $routeProvider.when('/', {
      controller: 'main',
      templateUrl: 'views/main.view.html'
    })
    .otherwise({
      redirectTo: '/'
    });
});
