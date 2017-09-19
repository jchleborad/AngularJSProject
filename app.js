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
//Set up the controler and an empty array, todoList
  var app = angular.module('myApp', []);
  app.controller('todoCtrl', function($scope) {
    $scope.todoList = [];

//Create a function to push input into the todoList Array, set initial value to unchecked (done:false)
//Initial state of input field is empty (= "")
    $scope.todoAdd = function() {
      $scope.todoList.push({todoText:$scope.todoInput, done:false});
      $scope.todoInput = "";
    };

//Create a copy of todoList, call it "oldList" and set todoList array to empty
//Loop through oldList an for each instance where item is not done, push item back into todoList 
    $scope.remove = function() {
      var oldList = $scope.todoList;
      $scope.todoList = [];
      angular.forEach(oldList, function(x) {
        if (!x.done) $scope.todoList.push(x);
      });
    };
  });
