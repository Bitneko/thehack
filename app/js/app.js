/**
 * Application Module
 */
define([
    'jquery',
    'underscore',
    'backbone',
    'router'
], function($, _, Backbone, Router){
    'use strict';
    var initialize = function(){
        console.log('App module iniialized');

        // Pass in our Router module and call it's initialize function
        Router.initialize();
  };

  return {
    initialize: initialize
  };
});