define(['./module'], function(controllers) {
  'use strict';

  controllers.controller('Details', function($rootScope, $scope, $stateParams, Ideas, Comments, User) {
    $scope.idea = {};
    $scope.comments = [];
    $scope.comment = '';
    $scope.user = {};

    $scope.loadUser = function() {
      User.getLogged().then(function(user) {
        $scope.user = user;
      });
    };

    $scope.loadIdea = function() {
      Ideas.getById(parseInt($stateParams.id), function(idea) {
        $scope.idea = idea;
      });
    };

    $scope.loadComments = function() {
      Comments.getCommentsForIdea(parseInt($stateParams.id)).then(function(comments) {
        $scope.comments = comments;
      });
    };

    $scope.assign = function() {
      Ideas.assign($scope.idea, $scope.user);
    };
    $scope.vote = function() {
      Ideas.vote($scope.idea, $scope.user);
    };

    $scope.onCommentSave = function() {
      console.log($scope.comment);
      Comments.insertCommentForIdea($scope.idea.Id, $scope.comment).then(function() {
        $scope.loadComments();
      });
      $scope.comment = '';
    };

    $scope.loadUser();
    $scope.loadIdea();
    $scope.loadComments();
  });
});
