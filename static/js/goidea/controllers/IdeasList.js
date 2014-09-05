define(['./module'], function(controllers) {
  'use strict';

  controllers.controller('IdeasList', function($rootScope, $scope, Ideas) {
    $scope.ideas = [];
    Ideas.getIdeas().then(function(ideas){
      $scope.ideas = ideas;
    });
    console.log('IdeasListCtrl');
  });
});
