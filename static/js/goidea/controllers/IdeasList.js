define(['./module'], function(controllers) {
  'use strict';

  controllers.controller('IdeasList', function($rootScope, $scope, Ideas, User) {
    $scope.ideas = [];

    Ideas.getIdeas().then(function(ideas) {
      $scope.ideas = ideas;
    });

    User.getLogged().then(function(user) {
      $scope.user = user;
    });
    $scope.$on('idea-click-event', function(event, args) {
      Ideas.getIdeas().then(function(ideas) {
        $scope.ideas = _.filter(ideas, function(idea) {
          return idea.Id === args.id;
        });
      });
    });
    $scope.$on('day-click-event', function(event, args) {
      Ideas.getIdeas().then(function(ideas) {
        $scope.ideas = _.filter(ideas, function(idea) {
          return new Date(idea.EventDate).toDateString() === new Date(args).toDateString();
        });
      });
    });
  });
});
