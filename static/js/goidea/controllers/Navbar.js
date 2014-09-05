define(['./module', 'require'], function (controllers, require) {
  'use strict';


  controllers.controller('Navbar', function ($rootScope, $scope, User) {
    $scope.isLogged = false;
    //attempt to log in user on init
    User.getLogged().then(function (user) {
      $scope.user = user;
      $scope.isLogged = true;
    });

    /**
     * Logs in a user
     * @param {Object} credentials
     */
    $scope.logIn = function (credentials) {
      $scope.disabled = true;
      $scope.loginError = false;

      var authFail = function () {
        $scope.isLogged = false;
        $scope.loginError = true;
        $scope.disabled = false;
      };

      var getUser = function () {
        return User.getLogged();
      };

      var authSuccess = function (user) {
        $scope.isLogged = true;
        $scope.disabled = false;
        $scope.user = user;
      };

      User.authenticate(credentials.username, credentials.password)
        .then(getUser, authFail)
        .then(authSuccess, authFail);
    };

    /**
     * Logs out a user
     */
    $scope.logOut = function () {
      $scope.isLogged = false;
      $scope.user = null;
      User.logOut();
    };

    $scope.loggedTemplateUri = require.toUrl('./../views/templates/loggedDropdown.html');
    $scope.notLoggedTemplateUri = require.toUrl('./../views/templates/notLoggedDropdown.html');
  });
});