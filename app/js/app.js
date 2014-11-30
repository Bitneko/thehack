/**
 * Application Module
 */
define([
    'jquery',
    'underscore',
    'backbone',
    'router',
    'app/views/main/controlView'
], function($, _, Backbone, Router, ControlView){
    'use strict';
    var initialize = function(){
        console.log('App module initialized');

        var controlView = new ControlView();

        controlView.render();

        // Pass in our Router module and call it's initialize function
        Router.initialize();
  };

  return {
    initialize: initialize
  };
});