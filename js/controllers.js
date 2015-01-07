var app = angular.module('findADoc', ['ngModal', 'ui.utils']);

app.config(function(ngModalDefaultsProvider) {
  return ngModalDefaultsProvider.set({
    closeButtonHtml: "<i class='fa fa-times'></i>"
  });
});

app.directive('errSrc', function() {
  return {
    link: function(scope, element, attrs) {

      scope.$watch(function() {
        return attrs['ngSrc'];
      }, function (value) {
        if (!value) {
          element.attr('src', attrs.errSrc);
        }
      });

      element.bind('error', function() {
        element.attr('src', attrs.errSrc);
      });
    }
  }
});

// app.filter('unique', function() {
//     return function(input, key) {
//         var unique = {};
//         var uniqueList = [];
//         for(var i = 0; i < input.length; i++){
//             if(typeof unique[input[i][key]] == "undefined"){
//                 unique[input[i][key]] = "";
//                 uniqueList.push(input[i]);
//             }
//         }
//         return uniqueList;
//     };
// });

app.controller('doctorsController', ['$scope', '$http', function($scope, $http) {
  $scope.link = "http://google.com";
  $scope.modalShown = false;
  $scope.toggleModal = function() {
    $scope.modalShown = !$scope.modalShown;
  };
  $http.get('css/merged1-20.json').success(function(data, status, headers, config) {
    $scope.doctors = data.Provider;
  }).
  error(function(data, status, headers, confid) {
    console.log("Building could not read JSON");
  });
}]);
