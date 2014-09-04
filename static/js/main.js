require(['static/js/sharedRequireConfig.js'], function(sharedRequireConfig) {
  'use strict';
  require.config(sharedRequireConfig);

  require(['./goidea/namespace','./goidea/module'], function(namespace) {
//      angular.element().ready(function() {
//          angular.bootstrap(document, [namespace]);
//      });
  });
});
