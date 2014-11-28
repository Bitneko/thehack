/**
 * Application Bootstrap
 */
require.config({
    paths: {
        jquery: 'libs/jquery',
        underscore: 'libs/underscore',
        backbone: 'libs/backbone'  
    }
});

require([
    'app',
], function(App){
    'use strict';
    
    // The "app" dependency is passed in as "App"
    App.initialize();
});
