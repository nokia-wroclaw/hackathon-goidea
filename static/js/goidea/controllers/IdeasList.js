define(['./module'], function(controllers) {
  'use strict';

  controllers.controller('IdeasList', function($rootScope, $scope, Ideas, User) {
    $scope.ideas = [];

    Ideas.getIdeas().then(function(ideas){
      $scope.ideas = ideas;
    });

    User.getLogged().then(function(user){
      $scope.user = user;
    });
  });
});
