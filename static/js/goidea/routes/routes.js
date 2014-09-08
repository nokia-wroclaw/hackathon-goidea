define(['angular', '../namespace', 'require', 'ui-router', 'ui.calendar'],
  function(angular, namespace, require) {
    'use strict';

    return angular.module(namespace + '.routes', ['ui.router', 'ui.calendar'])
      .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("ideas");
        $stateProvider
          .state('default', {
            url: "/",
            templateUrl: require.toUrl('./../views/default.html')
          }).state('default.list', {
            url: "ideas",
            templateUrl: require.toUrl('./../views/list.html')
          })
          .state('default.edit', {
            url: "edit/idea-:id",
            templateUrl: require.toUrl('./../views/edit.html')
          })
          .state('default.new', {
            url: "edit/idea",
            templateUrl: require.toUrl('./../views/edit.html')
          })
          .state('default.details', {
            url: "details/idea-:id",
            templateUrl: require.toUrl('./../views/details.html')
          });
      });
  });
