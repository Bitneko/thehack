/**
 * Application Load View
 */
define([
    // These are path alias that we configured in our bootstrap
    'jquery',
    'underscore',
    'backbone',
    'text!templates/main/splash.html',
    'app/models/secretModel',
    'app/collections/secretCollection',
    'jquery-ui',
    'jquery.ui.touch-punch'
], function($, _, Backbone, SplashViewTemplate, SecretModel, SecretCollection){
    'use strict';

    var length;

    var loadScreen = function(id){
        var $screen = $('.load-screen'),
            direction = 'reset',
            threshold = 200,
            id = id;

        $screen.draggable({ 
            axis: "x",
            drag: function(e) {
                var offset   = $screen.offset().left;

                if(offset > threshold/2) {
                    $('#app')
                        .removeClass()
                        .addClass('green');
                } else if(offset < (-1 * threshold/2)){
                    $('#app')
                        .removeClass()
                        .addClass('magenta');
                }
            },
            stop: function(e) {
                var offset   = $screen.offset().left;

                if(offset > threshold) {
                    if(id > 0) {
                        id--;
                    } else {
                        id = length - 1;
                    }

                    window.location.href = '/secret/' + id;
                    
                } else if(offset < (-1 * threshold)){
                    id++;
                    if(id > length - 1) {
                        id = 0;
                    }
                    window.location.href = '/secret/' + id;
                }

                $screen.animate({'left': '0'});
            }
        });
    };

    var SplashView = Backbone.View.extend({
        el: $('#loadScreen'),

        render: function(id) {

            window.profileCount = id;

            var secretCollection = new SecretCollection();

            secretCollection.fetch({
                success: function(e) {

                    length = e.models.length;

                    var secret = e.models[id].attributes;

                    var data = {
                        secret:secret,
                        _:_
                    };

                    var compiledTemplate = _.template(SplashViewTemplate)(data);

                    $("#loadScreen")
                        .hide()
                        .html( compiledTemplate )
                        .fadeIn(function(){
                            loadScreen(id);
                        });
                }
            });
        },
    });

    // Return View
    return SplashView;
});