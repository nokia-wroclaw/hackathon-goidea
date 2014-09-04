define([], function () {
    "use strict";

    return {
        baseUrl: 'static/js',
        paths: {
            'angular': '../../static/components/angularjs/angular',
            'ui-router': '../../static/components/angular-ui-router/release/angular-ui-router',
            'bootstrap': '../../static/components/bootstrap/dist/js/bootstrap',
            '_': '../../static/components/lodash/dist/lodash.min',
            'jquery': '../../static/components/jquery/dist/jquery.min',
            'bootstrapcss': ['../../static/components/bootstrap/dist/css/bootstrap'],
        },
        map: {
            '*': {
                '$': 'jquery',
                '@commons': './scripts',
                'css': '/static/components/require-css/css.js'
            }
        },
        shim: {
            'angular': {
                'deps': [
                    'jquery',
                    'bootstrap',
                    'css!bootstrapcss',
                    'css!../css/main.css'
                ],
                'exports': 'angular'
            },
            bootstrap : {
              deps : [
                'jquery'
              ]
            },
            '_': {
                'exports': '_'
            },
            'ui-router': {
                'deps': ['angular']
            },
            'csses': {
                'deps': ['css!bootstrapcss']
            }

        }
    };
});
