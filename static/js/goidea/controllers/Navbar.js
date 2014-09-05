define(['./module','require'], function(controllers,require) {
  'use strict';



  controllers.controller('Navbar', function($rootScope, $scope) {
    $scope.isLogged = false;
    $scope.loggedTemplateUri = require.toUrl('./../views/templates/loggedDropdown.html');
    $scope.notLoggedTemplateUri = require.toUrl('./../views/templates/notLoggedDropdown.html');
  });
});