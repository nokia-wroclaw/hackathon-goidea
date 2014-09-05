define(['angular', '../namespace', 'require', 'ui-router'],
  function (angular, namespace, require) {
    'use strict';

    return angular.module(namespace + '.routes', ['ui.router'])
      .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/");
        $stateProvider
          .state('listOfIdeas', {
            url: "/",
            templateUrl: require.toUrl('./../views/state1.html')})
          .state('singleIdea', {
            url: "/state2",
            templateUrl: require.toUrl('./../views/state2.html')
          })
          .state('default.details', {
            url: "/details",
            templateUrl: require.toUrl('./../views/details.html')
          });
      });
  });
