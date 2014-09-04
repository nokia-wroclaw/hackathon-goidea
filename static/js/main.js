require(['static/js/sharedRequireConfig.js'], function(sharedRequireConfig) {
  'use strict';
  require.config(sharedRequireConfig);

  require(['angular', 'jquery', 'ui-router', 'bootstrap'], function(angular) {
    console.log(angular);
  });
});
