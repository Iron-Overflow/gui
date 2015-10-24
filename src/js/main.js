;(function(){
  // $("a.questions-link").trigger("click");


  angular.module('ironOverflow', ['ngRoute'], function($routeProvider){
    $routeProvider
      .when('/',{
        redirectTo: 'questions'
      })
      .when('/questions', {
        templateUrl: 'questions.html'
      })
      .when('/ask',{
        templateUrl: 'ask.html'
      })

  })

  .run(function($http, $rootScope){
    $http.get("https://iron-overflow.herokuapp.com/")
    // $http.get("/src/test.json")
    .then(function(arguments){
      // console.log(arguments.data[0]);
      $rootScope.questions = arguments.data;
      // $rootScope.body = arguments.data[0].inquiry;
      // $rootScope.createdAt = arguments.data[0].created_at;
      // $rootScope.author = 'author';


    });
    $rootScope.votes = 12;
    $rootScope.numberAnswers = 45;
    // $rootScope.title = 'testing question title';
    // $rootScope.body = 'testing question body';
    // $rootScope.createdAt = '11-23-20015';
    // $rootScope.author = 'author';

  })



  .controller('MainController', function($scope, $route, $routeParams, $location){
    $scope.$route = $route;
    $scope.$location = $location;
    $scope.$routeParams = $routeParams;
  })

  .controller('questionController', function($scope, $routeParams, $http, $rootScope){
    $scope.name = "questionController";
    $scope.params = $routeParams;
    var id = $routeParams.questionId;
    $http.get("https://iron-overflow.herokuapp.com/questions/"+id)
      .then(function(arguments){
        $rootScope.question = arguments.data;
      })

  })

  .config(function($routeProvider, $locationProvider){
    $routeProvider
      .when('/answers/:questionId', {
        templateUrl: 'answers.html',
        controller: 'questionController'
      })
  })

})();
