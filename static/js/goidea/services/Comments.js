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

      getCommentsForIdea : function(id, callback){
        var result = [];

        var filter = function(){
          var comments = _.filter(data, function(item){
            return item.ideaId === id;
          });
          result = _.union(result,comments);
          if (_.isFunction(callback)) {
            callback(result);
          }
        };
        filter();

        return result;
      }
    };

    var data = [{
      id : 1,
      ideaId: 1,
      date: '10.10.2012',
      creator: 'creator',
      comment: 'Aha Aha Aha Aha'

    }, {
      id : 2,
      ideaId: 1,
      date: '10.10.2012',
      creator: 'creator',
      comment: 'Blal Bla bla'
    }];

    return service;
  });
});
