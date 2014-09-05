define(['./module'], function(services) {
  'use strict';

  services.factory('Comments', function() {

    var service = {
      getCommentsForIdea : function(id, callback){
        var result = {};

        var filter = function(){
          var idea = _.filter(data,function(item){
            return item.ideaId == id;
          });
          _.extend(result,idea);
          if (_.isFunction(callback)) {
            callback(result);
          }
        };
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
