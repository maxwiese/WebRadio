var myApp = angular.module('myApp');

myApp.controller('main', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams) {
  console.log("Controllers loadet ... ");

  $scope.runRadio = function() {
    console.log('Load function');
    var id = $routeParams.url;

    $http.get('/stations')
      .then(function(response) {
        console.log("Stations loaded...");

        var list = response.data
        console.log(list);
        $scope.radio_station = list[id].station;
        $scope.radio_url = list[id].url;
        $scope.radio_image = list[id].image;

        $scope.back = function() {
          window.location.href = "/#/radio"
        };

        $scope.stop = function() {
          $http.get('/stop').then((response) => {
            console.log('stoped');
          });
        };

        $scope.play = function() {
          $http.get('/run/' + list[id].id)
            .then((response) => {
              console.log('play ' + id);
            });
        };

      });
  };

  $scope.stations = function() {
    $http.get('/stations')
      .then(function(response) {
        console.log("Stations loaded...");
        $scope.all = response.data
      });
  };

}]);
