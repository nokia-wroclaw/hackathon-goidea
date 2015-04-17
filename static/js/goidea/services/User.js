define(['./module'], function (services) {
  'use strict';

  services.factory('User', function ($http, $q) {

    var currentUser;

    var service = {
      authenticate: function (username, password) {
        var deffered = $q.defer();
        $http.post('/auth', {Username: username, Password: password})
          .success(function () {
            deffered.resolve();
          })
          .error(function () {
            deffered.reject();
          });
        return deffered.promise;
      },
      getLogged: function () {
        if (currentUser !== undefined) {
          var deffered = $q.defer();
          deffered.resolve(currentUser);
          return deffered.promise;
        } else {
          return $http.get('/auth', {})
            .then(function (fetchedUser) {
              return (currentUser = fetchedUser);
            }, function () {
              return (currentUser = null);
            });
        }
      },
      logOut: function () {
        //reset cookie
        currentUser = undefined;
        $http.delete('/auth', {});
      }
    };

    return service;
  });
});
