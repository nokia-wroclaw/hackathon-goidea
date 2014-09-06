define(['angular',
    './namespace',
    './controllers/index',
    './directives/index',
    './services/index',
    './routes/routes',
    'ui.bootstrap'
  ],
  function(angular, namespace) {
    'use strict';

    return angular.module(namespace, [
        namespace + '.controllers',
        namespace + '.directives',
        namespace + '.services',
        namespace + '.routes',
        'ui.bootstrap'
    ]).run(function() {});
  });
