require(['static/js/sharedRequireConfig.js'], function(sharedRequireConfig) {
  'use strict';

  sharedRequireConfig.baseUrl = 'static/js';

  require.config(sharedRequireConfig);

  require(['angular'], function(angular) {
    console.log(angular);
  });
});