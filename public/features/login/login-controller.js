app.controller('LoginController', ['$scope','$state','LoginService', function($scope, $state, LoginService){
  console.log('login controller started!');

  $scope.click = function(){
    LoginService.login();
  }
}]);