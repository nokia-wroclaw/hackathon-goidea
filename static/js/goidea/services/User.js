define(['./module'], function(services) {
  'use strict';

  services.factory('User', function($http, $q) {
    //ToDO Remember remove this
    var currentUser = {};

    var service = {
      authenticate: function(username, password) {
        var deffered = $q.defer();
        $http.post('/auth', {
          Username: username,
          Password: password
        })
          .success(function() {
            deffered.resolve();
          })
          .error(function() {
            deffered.resolve();
          });
        return deffered.promise;
      },
      isLoggedIn: function() {
        var deffered = $q.defer();
        service.getLogged().then(function() {
          deffered.resolve(true);
        }, function() {
          deffered.resolve(false);
        });

        return deffered.promise;
      },
      getLogged: function() {
        var deffered = $q.defer();
        if (!_.isEmpty(currentUser)) {
          deffered.resolve(currentUser);
        }
        $http.get('/auth', {})
          .success(function(fetchedUser) {
            currentUser = fetchedUser;
            deffered.resolve(currentUser);
          })
          .error(function() {
            deffered.reject();
          });
        return deffered.promise;
      },
      logOutUser: function() {
        //reset cookie
        currentUser = {};
      }
    };

    return service;
  });
});
