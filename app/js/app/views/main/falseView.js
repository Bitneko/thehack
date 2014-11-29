/**
 * Application Load View
 */
define([
    // These are path alias that we configured in our bootstrap
    'jquery',
    'underscore',
    'backbone',
    'text!templates/main/false.html'
], function($, _, Backbone, FalseViewTemplate){
    'use strict';

    var FalseView = Backbone.View.extend({
        el: $('#cards'),

        render: function() {
            var data = {};

            var compiledTemplate = _.template(FalseViewTemplate)(data);

            $("#cards")
                .hide()
                .html( compiledTemplate )
                .fadeIn();
        }
    });

    // Return View
    return FalseView;
});
