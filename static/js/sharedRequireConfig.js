define([], function() {
  "use strict";

  return {
    baseUrl: 'static/js',
    paths: {
      'angular': '../../static/components/angularjs/angular.min',
//      'angular-route': './libs/angular-route.min',
//      'ui-router': './libs/angular-ui-router.min',
//      'ui-bootstrap': './libs/bootstrap/ui-bootstrap.min',
      '_': '../../static/components/lodash/dist/lodash.min',
//      'jquery': './libs/jquery',
//      'jquery-ui': './libs/jquery-ui/jquery-ui',
//      'select2': './libs/select2/select2',
//      'slimscroll': './libs/slimscroll',
//      'prettify': './libs/prettify/prettify',
//      'jquery.bootstrap-duallistbox': './libs/duallistbox/jquery.bootstrap-duallistbox.min',
//      'angular-duallistbox': './libs/duallistbox/angular-bootstrap-duallistbox.min',
//      'ng-infinite-scroll': './libs/ng-infinite-scroll',
//      'DynamicTableModel': './libs/DynamicTableModel',
//      'xeditable': './libs/angular-xeditable/js/xeditable'
    },
    map: {
      '*': {
        '$': 'jquery',
        '@commons': './scripts'
      }
    },
    shim: {
      'angular': {
        //'deps': ['jquery'],
        'exports': 'angular'
      },
//      'prettify': {
//        'exports': 'prettyPrintOne'
//      },
//      'ng-infinite-scroll': {
//        'deps': ['angular']
//      },
      '_': {
        'exports': '_'
      },
//      'angular-route': {
//        'deps': ['angular']
//      },
//      'ui-router': {
//        'deps': ['angular']
//      },
//      'ui-bootstrap': {
//        'deps': ['angular']
//      }
    }
  };
});
