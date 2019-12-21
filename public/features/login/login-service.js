app.service('LoginService', [function(){
  var text = 'Logging in!';
  return {
    login: function(){
      console.log(text);
    },
    change: function(){
      text = 'Changed';
    }
  }
}]);