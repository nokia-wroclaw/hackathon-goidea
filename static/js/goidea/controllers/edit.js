define(['./module'], function (controllers) {
  'use strict';

  controllers.controller('edit', function ($rootScope, $scope, Ideas, $stateParams) {

    $scope.idea = Ideas.getById($stateParams.id);

    $scope.isSaved = function(){
      return _.isNumber($scope.idea.id);
    };

    $scope.update = function(){
      Ideas.updateOrInsert($scope.idea).success(function(idea){
        $scope.idea = idea;
      });
    }
  });
});
