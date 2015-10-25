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
    });
    $rootScope.votes = 12;
    $rootScope.numberAnswers = 45;
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
      $http.get("https://iron-overflow.herokuapp.com/answers/")
      .then(function(arguments){
        $rootScope.answers = arguments.data;
        $rootScope.answer_qty = arguments.data.length;
      })
    })

  .config(function($routeProvider, $locationProvider){
    $routeProvider
      .when('/answers/:questionId', {
        templateUrl: 'partials/answers.html',
        controller: 'questionController'
      })
  })

  .controller("askController", function($http){
    console.log("calling askController")
    this.question={
    }
     //console.log($scope.question.title)
    this.addQuestion = function(){
       //console.log(this.question.title);
       //TODO change get for post when ready
      $http.get("https://iron-overflow.herokuapp.com/questions.json")
      .then(function(response){
        console.log(response.data[0].id)
      })
      this.question = {}
    };
  })

  .controller("userController", function($http){
    console.log("calling user controller");
    this.user={};
    console.log("i'm getting this far");
    this.createUser = function(){
      console.log("calling addUser function");
      console.log(this.user.username);
      //$http.post()
      //.then(function(response){
        //console.log(response.data[0].id)
      // });
      this.user = {};
    };
  });

})();
