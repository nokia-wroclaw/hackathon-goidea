define(['./module'], function (services) {
    'use strict';

    services.factory('Ideas', function ($timeout, $http, $q, $rootScope) {
        var service = {
            getById: function (id, callback) {
              var result = {};
              this.getIdeas().then(function(ideas){
                findById(ideas, id, result, callback);
              });
              return result;
            },
            getIdeas: function () {
                var deferred = $q.defer();
                $http.post('/api/ideas')
                    .success(function (ideas) {
                        deferred.resolve(ideas);
                    })
                    .error(function () {
                        deferred.reject();
                    });
                return deferred.promise;
            },
            updateOrInsert: function (idea) {
                var deferred = $q.defer();
                $http.put('/api/ideas', idea)
                    .success(function (idea) {
                        deferred.resolve(idea);
                    })
                    .error(function () {
                        deferred.reject();
                    });
                return deferred.promise;
            },
            assign: function (idea, user) {
                idea.Assignees = idea.Assignees || [];
                idea.Assignees.push(user);
                this.updateOrInsert(idea);
                $rootScope.$broadcast('ideas-updated');
            }
        };

        /**
         * @param {Array} data
         * @param {Number} id
         * @param {Object} result
         * @param {Function} callback
         */
        var findById = function (data, id, result, callback) {
            var idea = _.find(data, function (item) {
                return item.Id == id;
            });
            _.extend(result, idea);
            if (_.isFunction(callback)) {
                callback(result);
            }
        };

        return service;
    });
});
