define(['./module'], function (services) {
  'use strict';

  services.factory('Ideas', function ($timeout, $http, $q) {

    var service = {
      getById: function (id, callback) {
        var result = {};

        if (_.isNumber(id)){
          $timeout(function () {
            findById(id, result,callback);
          }, 25);
        }

        return result;
      },
      getIdeas: function (callback) {
        callback(data);
      },
      updateOrInsert: function (idea) {
        var $httpMethod = _.isNumber(idea.Id)? $http.post:$http.put;
        var deferred = $q.defer();
        $httpMethod.call($http,'/api/ideas', idea)
          .success(function (idea) {
            deferred.resolve(idea);
          })
          .error(function () {
            deferred.reject();
          });
        return deferred.promise;
     }
    };

    /**
     * @param {Number} id
     * @param {Object} result
     * @param {Function} callback
     */
    var findById = function (id, result, callback) {
      var idea = _.find(data, function (item) {
        return item.Id == id;
      });
      _.extend(result, idea);
      if (_.isFunction(callback)) {
        callback(result);
      }
    };

    var data = [
      {
        id: 0,
        title: 'Obiad dla Chmursona',
        creation_date: '10.10.2012',
        event_date: '20.12.2017',
        votes: ['ja', 'oni'],
        description: 'Zamawiaj jedzenie z głodnym Chmursonem',
        status: 'proposal',
        creator_id: 1,
        assigned: ['oni'],
        attachments: ['stample.jpeg', 'Example.svg'],
        icon: '',
        comments: '',
        minAssignees: 3
      },
      {
        id: 1,
        creationDate: '10.10.2012',
        creator: 'creator',
        title: 'Alice in wonderland',
        description: "Alice opened the door and found that it led into a small passage, not" +
          "much larger than a rat-hole: she knelt down and looked along the passage" +
          "into the loveliest garden you ever saw. How she longed to get out of" +
          "that dark hall, and wander about among those beds of bright flowers and" +
          "those cool fountains, but she could not even get her head through the" +
          "doorway; 'and even if my head would go through,' thought poor Alice, 'it" +
          "would be of very little use without my shoulders. Oh, how I wish I could" +
          "shut up like a telescope! I think I could, if I only knew how to begin.'" +
          "For, you see, so many out-of-the-way things had happened lately," +
          "that Alice had begun to think that very few things indeed were really" +
          "impossible.",
        status: 'proposal',
        proposedDate: '20.12.2017',
        votes: ['ja', 'oni'],
        assigned: ['oni', 'ona'],
        attachments: [],
        icon: '',
        comments: '',
        minAssignees: 3
      }
    ];

    return service;
  });
});
