define(['./module', 'require'], function(directives, require) {
  'use strict';

  return directives.directive('ideaComment', function($rootScope) {
    return {
      restrict: "E",
      templateUrl: require.toUrl('./../views/templates/ideaComment.html'),
      replace: true,
      scope: {
        idea: '='
      },

      link: function(scope, element, attrs) {
        scope.progress = scope.idea.assigned.length / scope.idea.minAssignes * 100;
      }
    };
  });
});
