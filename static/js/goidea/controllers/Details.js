define(['./module'], function(controllers) {
  'use strict';

  controllers.controller('Details', function($rootScope, $scope, Ideas, $stateParams) {
    $scope.idea = {};
    Ideas.getIdea($stateParams.id, function(idea){
      $scope.idea = idea;
    });
  });
});
