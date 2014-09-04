define(['./module', '_'], function(controllers, _) {
  'use strict';

  controllers.controller('IdeasListCtrl', function($rootScope, $scope) {
    $scope.ideas = [];
    console.log('IdeasListCtrl');

  });
});
