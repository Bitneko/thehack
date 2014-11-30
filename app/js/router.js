/**
 * Router Module
 */
define([
    'jquery',
    'underscore',
    'backbone',
    'app/views/main/splashView',
    'app/views/main/truthView',
    'app/views/main/falseView'
], function($, _, Backbone, SplashView, TruthView, FalseView){
    'use strict';

    var AppRouter = Backbone.Router.extend({
        routes: {
            'dummy'         : 'listVenue',
            ''              : 'secret',
            'secret/:id'    : 'secret',
            'truth/:id'     : 'truth',
            'false/:id'     : 'false',
            // Default
            '*actions'      : 'defaultAction'
        }
    });

    var initialize = function(){
        console.log('Router module initialized');

        var app_router = new AppRouter();

        /**
         * Default action
         */
        app_router.on('route:defaultAction', function(actions){
            // We have no matching route, lets just log what the URL was
            console.log('No route:', actions);
        });

        /**
         * Load Application
         */
        app_router.on('route:secret', function(id){
            if(id === null) {
                id = 0;
            }

            var splashView = new SplashView();

            splashView.render(id);
        });


        app_router.on('route:truth', function(id){
            var truthView = new TruthView();

            truthView.render(id);
        });

        app_router.on('route:false', function(id){
            var falseView = new FalseView();

            falseView.render(id);
        });

        Backbone.history.start({pushState: false});

        return app_router;
   };
        

  return {
    initialize: initialize
  };
});