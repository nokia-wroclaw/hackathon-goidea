define(['./module'], function(controllers) {
  'use strict';

  controllers.controller('Details', function($rootScope, $scope, $stateParams, Ideas, Comments) {
    $scope.idea = {};
    $scope.comments = [];
    $scope.comment = '';

    Ideas.getById(parseInt($stateParams.id), function(idea){
      $scope.idea = idea;
    });

    Comments.getCommentsForIdea(parseInt($stateParams.id), function(comments){
      $scope.comments = comments;
    });

    $scope.onCommentSave = function(){
      console.log($scope.comment);
      Comments.insertCommentForIdea($scope.idea.Id, Math.floor(Math.random()*3)+1, $scope.comment).then(function(comment){
        $scope.comments.push({a:'a'});
      });
      $scope.comment = '';
    };
  });
});
