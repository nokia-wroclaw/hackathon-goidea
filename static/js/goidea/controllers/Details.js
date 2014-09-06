define(['./module'], function(controllers) {
  'use strict';

  controllers.controller('Details', function($rootScope, $scope, $stateParams, Ideas, Comments, User) {
    $scope.idea = {};
    $scope.comments = [];
    $scope.comment = '';

    $scope.loadIdea = function(){
      Ideas.getById(parseInt($stateParams.id), function(idea){
        $scope.idea = idea;
      });
    };

    $scope.loadComments = function(){
      Comments.getCommentsForIdea(parseInt($stateParams.id)).then(function(comments){
        $scope.comments = comments;
      });
    };

    $scope.assign = function() {
      User.getLogged().then(function (user) {
        Ideas.assign(scope.idea, user);
      });
    };
    $scope.vote = function() {
      User.getLogged().then(function (user){
        Ideas.vote(scope.idea, user);
      });
    }

    $scope.onCommentSave = function(){
      console.log($scope.comment);
      Comments.insertCommentForIdea($scope.idea.Id, $scope.comment).then(function(){
        $scope.loadComments();
      });
      $scope.comment = '';
    };

    $scope.loadIdea();
    $scope.loadComments();
  });
});
