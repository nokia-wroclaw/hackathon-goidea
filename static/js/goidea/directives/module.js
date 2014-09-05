define(['angular',
  '../namespace',
  'angular-elastic'
], function(ng, namespace) {
  'use strict';

  return ng.module(namespace + '.directives', [
    'monospaced.elastic'
  ]);
});
