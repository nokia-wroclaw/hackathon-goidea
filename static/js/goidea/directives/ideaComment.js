define(['./module', 'require'], function(directives, require) {
  'use strict';

  return directives.directive('ideaComment', function($rootScope) {
    return {
      restrict: "E",
      templateUrl: require.toUrl('./../views/templates/ideaComment.html'),
      replace: true,
      scope: {
        comment: '='
      },

      link: function(scope, element, attrs) {
      }
    };
  });
});
