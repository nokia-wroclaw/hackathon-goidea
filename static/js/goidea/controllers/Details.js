define(['./module'], function(controllers) {
  'use strict';

  controllers.controller('Details', function($rootScope, $scope, $stateParams, Ideas, Comments) {
    $scope.idea = {};
    $scope.comments = [];

    Ideas.getById(parseInt($stateParams.id), function(idea){
      $scope.idea = idea;
    });

    Comments.getCommentsForIdea(parseInt($stateParams.id), function(comments){
      $scope.comments = comments;
    });
  });
});
