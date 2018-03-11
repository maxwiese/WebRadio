var myApp = angular.module('myApp');

myApp.controller('SystemController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
  console.log("Controllers loadet ... ");
  $scope.runRadio = function() {
    http.get('/run',).success(response) =>{
      console.log('run Radio');
    };
  };
}]);
