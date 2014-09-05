define(['angular', '../namespace', 'require', 'ui-router'],
  function (angular, namespace, require) {
    'use strict';

    return angular.module(namespace + '.routes', ['ui.router'])
      .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("state1");
        $stateProvider
          .state('default', {
            url: "/",
            templateUrl: require.toUrl('./../views/default.html')
          }).state('default.listOfIdea', {
            url: "state1",
            templateUrl: require.toUrl('./../views/state1.html')
          })
          .state('default.edit', {
            url: "edit/:id",
            templateUrl: require.toUrl('./../views/edit.html')
          })
          .state('default.details', {
            url: "details/:id",
            templateUrl: require.toUrl('./../views/details.html')
          });
      });
  });
