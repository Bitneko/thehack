/**
 * Application Bootstrap
 */
require.config({
    paths: {
        jquery: 'libs/jquery',
        underscore: 'libs/underscore',
        backbone: 'libs/backbone',
        hammer: 'libs/hammer',
        'jquery-ui': 'libs/jquery-ui',
        'jquery.ui.touch-punch': 'libs/jquery.ui.touch-punch',
        templates: '/templates'
    },

    shim: {
        "jquery-ui": {
            exports: "$",
            deps: ['jquery']
        },
        "jquery.ui.touch-punch": {
            exports: "$",
            deps: ['jquery', 'jquery-ui']
        }
    }
});

require([
    'app'
], function(App){
    'use strict';

    window.mongolKey = "3ITgiOBHpdq5jCkH1thwXeeIpIciNXDI";
    window.profileCount = 1;
    
    // The "app" dependency is passed in as "App"
    App.initialize();
});
