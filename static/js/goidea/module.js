define(['angular',
    './namespace',
    './controllers/index',
    './directives/index',
    './services/index',
    './routes/routes',
  ],
  function(ng, namespace) {
    'use strict';

    return ng.module(namespace, [
        namespace + '.controllers',
        namespace + '.directives',
        namespace + '.services',
        namespace + '.routes'
    ]).run(function() {});
  });
