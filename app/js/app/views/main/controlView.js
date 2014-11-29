/**
 * Application Load View
 */
define([
    // These are path alias that we configured in our bootstrap
    'jquery',
    'underscore',
    'backbone',
    'text!templates/main/controls.html'
], function($, _, Backbone, ControlViewTemplate){
    'use strict';

    var ControlView = Backbone.View.extend({
        el: $('#controls'),

        render: function() {
            var data = {};

            var compiledTemplate = _.template(ControlViewTemplate)(data);

            $("#controls")
                .hide()
                .html( compiledTemplate )
                .fadeIn();

            $("#controls .actions-toggle a").on(function(e){
                console.log("####");
                e.preventDefault();
            });
        }
    });

    // Return View
    return ControlView;
});
