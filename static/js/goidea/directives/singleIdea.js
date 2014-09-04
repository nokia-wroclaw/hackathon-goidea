define(['./module', 'require'], function(directives, require) {
  'use strict';

  return directives.directive('singleIdea', function($rootScope) {
    return {
      restrict: "E",
      templateUrl: require.toUrl('./../views/singleIdea.html'),
      replace: true,
      scope: {
        idea: '='
      },

      link: function(scope, element, attrs) {
        console.log('Diretive');
      }
    };
  });
});
