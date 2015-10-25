;(function(){
  // $("a.questions-link").trigger("click");


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
    $http.get("https://iron-overflow.herokuapp.com/")
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
        // $rootScope.answer_qty = arguments.data.length;
        $rootScope.answer_qty = arguments.data.length;
        // for(var index = 0; index < arguments.data.length; index++){
        //   if(arguments.data[index].question_id == id) {
        //     console.log("id: "+id);
        //     console.log("question_id: " + arguments.data[index].question_id);
        //     $rootScope.answer_qty++;
        //   }
        // };

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
