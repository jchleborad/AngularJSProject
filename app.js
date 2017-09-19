//ANGULARJS PART I LECTURE
// angular.module('myApp', ['ui.router',]).config(routing);
//
// routing.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
//
// function routing($stateProvider, $urlRouterProvider, $locationProvider) {
//   $stateProvider.
//   state('home', {
//     url: '/',
//     templateUrl: '/views/home.html',
//     controller: HomeController,
//     controllerAs: 'vm'
//   }).
//   state('about', {
//     url:'/about',
//     templateUrl: '/views/about.html',
//     controller: AboutController,
//     controllerAs: 'vm'
//   });
//
//   $urlRouterProvider.otherwise('/');
//   $locationProvider.html5Mode(true);
// }

// TODO LIST
  var app = angular.module('myApp', []);
  app.controller('todoCtrl', function($scope) {
    $scope.todoList = [];

    $scope.todoAdd = function() {
      $scope.todoList.push({todoText:$scope.todoInput, done:false});
      $scope.todoInput = "";
    };

    $scope.remove = function() {
      var oldList = $scope.todoList;
      $scope.todoList = [];
      angular.forEach(oldList, function(x) {
        if (!x.done) $scope.todoList.push(x);
      });
    };
  });
