;(function(){ //IIFE for angular

  angular.module('ironOverflow', ['ngRoute'], function($routeProvider){
    $routeProvider
      .when('/',{
        redirectTo: 'questions'
      })
      .when('/questions', {
        templateUrl: 'partials/questions.html'
      })
      .when('/ask',{
        templateUrl: 'partials/ask.html'
      })
      .when('/newuser', {
        templateUrl: 'partials/newuser.html'
      })

  })

  .run(function($http, $rootScope){
    $http.get("https://iron-overflow.herokuapp.com/questions.json")
    // $http.get("/src/test.json")
    .then(function(arguments){
      $rootScope.questions = arguments.data;
      // var qId = $rootScope.questions.data.id;
      // $rootScope.numberAnswers = arguments.data[qId].answers.length;
    });
    $rootScope.votes = 12;


  })



  .controller('MainController', function($scope, $route, $routeParams, $location){
    $scope.$route = $route;
    $scope.$location = $location;
    $scope.$routeParams = $routeParams;
  })

  .controller('questionController', function($scope, $routeParams, $http, $rootScope){
    // $scope.name = "questionController";
    // $scope.params = $routeParams;
    var id = $routeParams.questionId - 1;
    $http.get("https://iron-overflow.herokuapp.com/questions.json")
      .then(function(arguments){
        $rootScope.question = arguments.data[id];
      // })
      // $http.get("https://iron-overflow.herokuapp.com/answers/")
      // .then(function(arguments){
        $rootScope.answers = arguments.data[id].answers;
        // console.log(arguments.data[id].answers.length)
        $rootScope.answer_qty = arguments.data[id].answers.length;
      })
    })


  .config(function($routeProvider, $locationProvider){
    $routeProvider
      .when('/answers/:questionId', {
        templateUrl: 'partials/answers.html',
        controller: 'questionController'
      })
  })

})();
