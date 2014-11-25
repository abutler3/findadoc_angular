var app = angular.module('findADoc', ['ngModal']);

app.config(function(ngModalDefaultsProvider) {
  return ngModalDefaultsProvider.set({
    closeButtonHtml: "<i class='fa fa-times'></i>"
  });
});

app.filter('unique', function() {
    return function(input, key) {
        var unique = {};
        var uniqueList = [];
        for(var i = 0; i < input.length; i++){
            if(typeof unique[input[i][key]] == "undefined"){
                unique[input[i][key]] = "";
                uniqueList.push(input[i]);
            }
        }
        return uniqueList;
    };
});

app.controller('doctorsController', ['$scope', '$http', function($scope, $http) {
  $scope.link = "http://google.com";
  $scope.modalShown = false;
  $scope.toggleModal = function() {
    $scope.modalShown = !$scope.modalShown;
  };
  $http.get('css/findadoc.json').success(function(data) {
    $scope.doctors = data;
  });
}]);
