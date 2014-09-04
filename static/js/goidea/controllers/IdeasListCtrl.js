define(['./module', '_'], function(controllers, _) {
  'use strict';

  controllers.controller('IdeasListCtrl', function($rootScope, $scope, Ideas) {
    $scope.ideas = [];
    Ideas.getIdeas(function(ideas){
      $scope.ideas = ideas;
    });
    console.log('IdeasListCtrl');
  });
});
