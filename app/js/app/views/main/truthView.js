/**
 * Application Load View
 */
define([
    // These are path alias that we configured in our bootstrap
    'jquery',
    'underscore',
    'backbone',
    'text!templates/main/truth.html'
], function($, _, Backbone, TruthViewTemplate){
    'use strict';

    var TruthView = Backbone.View.extend({
        el: $('#cards'),

        render: function() {
                var data = {};

                var compiledTemplate = _.template(TruthViewTemplate)(data);

                $("#cards")
                    .hide()
                    .html( compiledTemplate )
                    .fadeIn();
        }
    });

    // Return View
    return TruthView;
});
