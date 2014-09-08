define(['./module'], function(services) {
  'use strict';

  services.factory('Comments', function($q, $http, User) {

    var service = {
      insertCommentForIdea: function(ideaId, comment) {
        return User.getLogged().then(function(user) {
          return {
            Body: comment,
            User: {
              Id: user.Id
            },
            Idea: {
              Id: ideaId
            }
          };
        }).then(function(putData) {
          return $http.put('/api/comments', putData)
            .success(function(comment) {
              return comment.data;
            })
            .error(function() {
              $q.reject();
            });
        });
      },

      getCommentsForIdea: function(ideaId) {
        return $http.post('/api/comments', {
          Filter: {
            Idea: '' + ideaId
          }
        }).then(function(resData) {
          return resData.data;
        });
      }
    };

    return service;
  });
});
