define(['./module'], function(services) {
  'use strict';

  services.factory('Comments', function($q, $http, User) {

    var service = {
      insertCommentForIdea: function(ideaId, comment){
        return User.getLogged().then(function(user){
          return {
            Body: comment,
            User: {
              Id: user.Id
            },
            Idea: {
              Id: ideaId
            }
          };
        }).then(function(putData){
          return $http.put('/api/comments', putData)
            .success(function (comment) {
              return comment.data;
            })
            .error(function () {
              $q.reject();
            });
        });
      },

      getCommentsForIdea : function(ideaId){
        return $http.post('/api/comments', {
          Idea:{
            Id: ideaId
          }
        }).then(function(resData){
          return _.filter(resData.data, function(item){
            return item.Idea.Id === ideaId;
          });
        });
      }
    };

    return service;
  });
});
