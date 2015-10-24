;(function(){
  angular.module('ironOverflow', ['ngRoute'], function($routeProvider){
    $routeProvider
      .when('/questions', {
        templateUrl: 'questions.html'
      })
      .when('/answers',{
        templateUrl: 'answers.html'
      })
      .when('/ask',{
        templateUrl: 'ask.html'
      })
  })

  .run(function($http, $rootScope){
    $rootScope.votes = 12;
    $rootScope.numberAnswers = 45;
    $rootScope.title = 'testing question title';
    $rootScope.body = 'testing question body';
    $rootScope.createdAt = '11-23-20015';
    $rootScope.author = 'author';
  })
  .run(function($http, $rootScope){
    $rootScope.answer_qty = 999;
    $rootScope.answer_vote = 23;
    $rootScope.answer_created_at = '12-13-2004';
    $rootScope.answer_body = 'testing body';
    $rootScope.answer_author = 'David';

  })

})();
