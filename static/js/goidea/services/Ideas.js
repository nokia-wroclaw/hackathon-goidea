define(['./module'], function (services) {
    'use strict';

    services.factory('Ideas', function ($timeout, $http, $q, $rootScope) {

        var service = {
            getById: function (id, callback) {
                var result = {};

                if (_.isNumber(id)) {
                    $timeout(function () {
                        findById(id, result, callback);
                    }, 25);
                }

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

        return service;
    });
});
