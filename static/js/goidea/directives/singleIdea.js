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
        scope.progress = scope.idea.assigned.length / scope.idea.minAssignes * 100;
      }
    };
  });
});
