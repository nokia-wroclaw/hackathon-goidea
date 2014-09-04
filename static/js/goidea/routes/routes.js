define(['angular', '../namespace', 'ui-router'],
  function(angular, namespace) {
    'use strict';

    return angular.module(namespace + '.routes', ['ui.router'])
      .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/");
        $stateProvider
          .state('main', {
            url: "/",
            template: '<h2>Halo!</h2>'
            //templateUrl: 'commonPartials/acl/singleUser'
          });
      });
  });
