define(['angular', '../namespace', 'require', 'ui-router'],
  function (angular, namespace, require) {
    'use strict';

    return angular.module(namespace + '.routes', ['ui.router'])
      .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/");
        $stateProvider
          .state('default', {
            url: "/",
            templateUrl: require.toUrl('./../views/default.html')
          }).state('default.state1', {
            url: "/state1",
            templateUrl: require.toUrl('./../views/state1.html')
          })
          .state('default.state2', {
            url: "/state2",
            templateUrl: require.toUrl('./../views/state2.html')
          });
      });
  });
