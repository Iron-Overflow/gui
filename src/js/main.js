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
      .when('/answers',{
        templateUrl: 'answers.html'
        // console.log($location.path())
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

  .run(function($http, $rootScope, $location){
    // $http.get("/src/test.json")
    $http.get("https://iron-overflow.herokuapp.com/questions/22")
    .then(function(arguments){
      // console.log(arguments.data[23])
      var url = $location.path();
      console.log(url);
      $rootScope.question = arguments.data;
    });
  })

  .run(function($http, $rootScope){
    $rootScope.answer_qty = 999;
    $rootScope.answer_vote = 23;
    $rootScope.answer_created_at = '12-13-2004';
    $rootScope.answer_body = 'testing body';
    $rootScope.answer_author = 'David';

  })

})();
