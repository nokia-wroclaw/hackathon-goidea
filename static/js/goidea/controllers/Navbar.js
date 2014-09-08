define(['./module', 'require'], function (controllers, require) {
  'use strict';


  controllers.controller('Navbar', function ($rootScope, $scope, User) {

    $scope.isLogged = false;

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

      User.authenticate(credentials.username, credentials.password)
        .then(getUser, authFail)
        .then(handleLoggedUser);
    };

    /**
     * Logs out a user
     */
    $scope.logOut = function () {
      $scope.isLogged = false;
      $scope.user = null;
      User.logOut();
    };

    /**
     * @param user
     */
    var handleLoggedUser = function (user) {
      if (!_.isEmpty(user)) {
        $scope.user = user;
        $scope.isLogged = true;
        $scope.disabled = false;
      }
    };

    $scope.loggedTemplateUri = require.toUrl('./../views/templates/loggedDropdown.html');
    $scope.notLoggedTemplateUri = require.toUrl('./../views/templates/notLoggedDropdown.html');

    //attempt to log in user on init
    User.getLogged().then(handleLoggedUser);
  });
});
