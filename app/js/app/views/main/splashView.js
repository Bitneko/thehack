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
    'hammer',
    'jquery-ui',
    'jquery.ui.touch-punch'
], function($, _, Backbone, SplashViewTemplate, SecretModel, SecretCollection, Hammer){
    'use strict';

    var length;

    var loadScreen = function(id){
        var $screen = $('.load-screen'),
            direction = 'reset',
            threshold = 100,
            id = id;

        $screen.draggable({ 
            axis: "x",
            drag: function(e) {
                var offset   = $screen.offset().left;

                if(offset > threshold/2) {
                    $('#app')
                        .removeClass()
                        .addClass('magenta');
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
                    $screen.animate({'left': $(window).width()});
                    window.location.href = '/#/secret/' + id;
                    
                } else if(offset < (-1 * threshold)){
                    id++;
                    if(id > length - 1) {
                        id = 0;
                    }
                    $screen.animate({'left': -$(window).width()});
                    window.location.href = '/#/secret/' + id;
                } else {
                    $screen.animate({'left': '0'});
                }
            }
        });
    };

    var SplashView = Backbone.View.extend({
        el: $('#loadScreen'),

        render: function(id) {

            window.profileCount = id;

            var secretCollection = new SecretCollection();

            secretCollection.fetch({
                data: { 
                    bust: (new Date()).getTime()
                },
                success: function(e) {

                    length = e.models.length;

                    var secret = e.models[id].attributes;

                    var data = {
                        secret:secret,
                        _:_
                    };

                    var compiledTemplate = _.template(SplashViewTemplate)(data);

                    $("#cards").empty();

                    $("#loadScreen")
                        .hide()
                        .stop()
                        .css({'left': 0})
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