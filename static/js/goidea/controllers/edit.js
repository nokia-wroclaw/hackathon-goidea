define(['./module'], function (controllers) {
  'use strict';

  controllers.controller('edit', function ($rootScope, $scope, Ideas, $stateParams) {

    $scope.idea = Ideas.getById($stateParams.id);

    $scope.isSaved = function(){
      return _.isNumber($scope.idea.id);
    }
  });
});
