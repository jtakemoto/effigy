app.controller('PostListController', ['$scope','LoginService', function($scope, LoginService){
  console.log('test')

  $scope.change = function(){
    LoginService.change();
  }
}]);