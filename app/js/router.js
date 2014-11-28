/**
 * Router Module
 */
define([
    'jquery',
    'underscore',
    'backbone'  
], function($, _, Backbone){
    'use strict';

    var AppRouter = Backbone.Router.extend({
        routes: {
            // Default
            '*actions': 'defaultAction'
        }
    });

    var initialize = function(){
        console.log('Router module initialized');

        var app_router = new AppRouter();


        app_router.on('route:showPage', function(){
            console.log('Route loaded');
        });

        app_router.on('route:defaultAction', function(actions){
            // We have no matching route, lets just log what the URL was
            console.log('No route:', actions);
        });

        Backbone.history.start({pushState: true});

        return app_router;
   };
        

  return {
    initialize: initialize
  };
});