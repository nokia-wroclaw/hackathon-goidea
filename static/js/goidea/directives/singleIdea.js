define(['./module', 'require'], function(directives, require) {
  'use strict';

  return directives.directive('singleIdea', function($rootScope, User, Ideas) {
    return {
      restrict: "E",
      templateUrl: require.toUrl('./../views/templates/singleIdea.html'),
      replace: true,
      scope: {
        idea: '='
      },

      link: function(scope, element, attrs) {
        scope.progress = (scope.idea.Assignees || []).length / scope.idea.MinAssignees * 100;
        scope.assign = function() {
            User.getLogged().then(function (user) {
                Ideas.assign(scope.idea, user);
            });
        }
      }
    };
  });
});
