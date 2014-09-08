define(['./module'], function(services) {
  'use strict';

  services.factory('Ideas', function($timeout, $http, $q, $rootScope) {
    var service = {
      getById: function(id, callback) {
        var result = {};
        $http.post('/api/ideas', {
          "Filter": {
            "Id": '' + id
          }
        }).success(function(idea) {
          idea = _.first(idea);
          idea.Assignees = idea.Assignees || [];
          idea.Comments = idea.Comments || [];
          idea.Voters = idea.Voters || [];
          callback(idea);
        });
      },
      getIdeas: function() {
        var deferred = $q.defer();
        $http.post('/api/ideas')
          .success(function(ideas) {
            deferred.resolve(_.map(ideas, function(idea) {
              idea.Assignees = idea.Assignees || [];
              idea.Voters = idea.Voters || [];
              idea.Comments = idea.Comments || [];
              return idea;
            }));
          })
          .error(function() {
            deferred.reject();
          });
        return deferred.promise;
      },
      updateOrInsert: function(idea) {
        var deferred = $q.defer();
        $http.put('/api/ideas', idea)
          .success(function(idea) {
            deferred.resolve(idea);
          })
          .error(function() {
            deferred.reject();
          });
        return deferred.promise;
      },
      assign: function(idea, user) {
        idea.Assignees = idea.Assignees || [];
        if (!_.contains(idea.Assignees, user)) {
          idea.Assignees.push(user);
          this.updateOrInsert(idea);
          $rootScope.$broadcast('ideas-updated');
        }
      },
      vote: function(idea, user) {
        idea.Voters = idea.Voters || [];
        if (!_.contains(idea.Voters, user)) {
          idea.Voters.push(user);
          this.updateOrInsert(idea);
          $rootScope.$broadcast('ideas-updated');
        }
      }
    };

    return service;
  });
});
