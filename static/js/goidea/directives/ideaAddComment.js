define(['./module', 'require'], function(directives, require) {
  'use strict';

  return directives.directive('ideaAddComment', function($rootScope) {
    return {
      restrict: "E",
      templateUrl: require.toUrl('./../views/templates/ideaAddComment.html'),
      replace: true,
      scope: {
        idea: '=',
        comment: '=',
        onSave: '='
      },

      link: function(scope, element, attrs) {}
    };
  });
});
