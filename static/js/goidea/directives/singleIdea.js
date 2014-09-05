define(['./module', 'require'], function(directives, require) {
  'use strict';

  return directives.directive('singleIdea', function($rootScope) {
    return {
      restrict: "E",
      templateUrl: require.toUrl('./../views/templates/singleIdea.html'),
      replace: true,
      scope: {
        idea: '='
      },

      link: function(scope, element, attrs) {
        scope.progress = (scope.idea.Assignees || []).length / scope.idea.MinAssignees * 100;
      }
    };
  });
});
