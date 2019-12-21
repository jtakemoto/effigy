app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  // Sets the default url route for all unrecognized routes
  // Note: states can either be reached via url OR state name
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'features/post/post-list/post-list.html',
      controller: 'PostListController'
    })
    .state('home.list', {
      url: 'list',
      templateUrl: 'features/login/login.html',
      controller: 'LoginController'
    })
}]);