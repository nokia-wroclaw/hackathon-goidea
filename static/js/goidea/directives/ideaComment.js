define(['./module', 'require'], function(directives, require) {
  'use strict';

  return directives.directive('ideaComment', function($rootScope) {
    return {
      restrict: "E",
      templateUrl: require.toUrl('./../views/templates/ideaComment.html'),
      replace: true,
      scope: {
        comment: '=',
        even: '@'
      },

      link: function(scope, element, attrs) {
        scope.even = scope.even === 'true' ? true : false;
        element.addClass(scope.even ? 'bg-success' : 'bg-info');
      }
    };
  });
});
