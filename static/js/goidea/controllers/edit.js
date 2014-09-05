define(['./module'], function (controllers) {
  'use strict';

  controllers.controller('edit', function ($rootScope, $scope, Ideas, $stateParams) {

    $scope.idea = Ideas.getById($stateParams.id);

    $scope.isSaved = function(){
      return _.isNumber($scope.idea.Id);
    };

    $scope.update = function(formIdea){
      Ideas.updateOrInsert(formIdea).then(function(idea){
        $scope.idea = idea;
      });
    }
  });
});
