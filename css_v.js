angular.module('app', [])
  .controller('UserCtrl', ['$scope', '$http', function($scope, $http) {
    // Source: User-controlled ID
    $scope.getUserData = function(userId) {
      // Sink: User-controlled ID used in HTTP request
      $http.get('/api/users/' + userId).then(function(response) {
        $scope.userData = response.data;
      });
    };
  }]);
