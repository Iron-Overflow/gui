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

})();
