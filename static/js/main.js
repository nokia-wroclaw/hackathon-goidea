require(['static/js/sharedRequireConfig.js'], function(sharedRequireConfig) {
  'use strict';

  sharedRequireConfig.baseUrl = 'static/js';

  require.config(sharedRequireConfig);

  require(['angular', 'jquery', 'ui-router', 'bootstrap'], function(angular) {
    console.log(angular);
  });
});