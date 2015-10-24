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

})();
