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
            deffered.resolve();
          });
        return deffered.promise;
      },
      getLogged: function () {
        var deffered = $q.defer();
        if (currentUser != undefined) {
          deffered.resolve(currentUser);
        } else {
          $http.get('/auth', {})
            .success(function (fetchedUser) {
              currentUser = fetchedUser;
              deffered.resolve(currentUser);
            })
            .error(function () {
              deffered.reject();
            });
        }
        return deffered.promise;
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
