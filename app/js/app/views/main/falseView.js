/**
 * Application Load View
 */
define([
    // These are path alias that we configured in our bootstrap
    'jquery',
    'underscore',
    'backbone',
    'text!templates/main/false.html',
    'text!templates/main/wrong.html',
    'app/models/secretModel',
    'hammer',
    'jquery-ui',
    'jquery.ui.touch-punch'
], function($, _, Backbone, FalseViewTemplate, WrongViewTemplate, SecretModel, Hammer){
    'use strict';

    var loadScreen = function(id){
        var $screen = $('#cards'),
            direction = 'reset',
            threshold = 100;

        var myOptions = {};
        var hammertime = new Hammer($screen[0], myOptions);
        hammertime.on('doubletap', function(ev) {
            var $likeIcon = $('<div class = "like-secret"><i class = "icon icon-suitcase"></i></div>');
            
            $likeIcon.hide();

            $('body').append($likeIcon);

            $likeIcon.fadeIn().delay(500).fadeOut(function(){
                $(this).remove();
            });
        });

        $screen.draggable({ 
            axis: "x",
            distance: 100,
            drag: function(e) {
                var offset   = $screen.offset().left;

                if(offset > threshold/2) {
                    $('#app')
                        // .removeClass()
                        // .addClass('green');
                } else if(offset < (-1 * threshold/2)){
                    $('#app')
                        .removeClass()
                        .addClass('magenta');
                }
            },
            stop: function(e) {
                var offset   = $screen.offset().left;

                if(offset > threshold) {

                    //window.location.href = '/#/secret/' + id;

                } else if(offset < (-1 * threshold)){
                    window.location.href = '/#/secret/' + id;
                    $screen.animate({'left': -$(window).width()});
                } else {
                    $screen.animate({'left': '0'});
                }
            }
        });
    };


    var FalseView = Backbone.View.extend({
        el: $('#cards'),

        render: function(id) {
            var secretModel = new SecretModel();
            secretModel.fetch({ 
                data: { 
                    secretid: id,
                    bust: (new Date()).getTime()
                },
                success: function(e) {
                    var secret = e.attributes[0],
                        compiledTemplate;

                    var percentage = Math.floor((Math.random() * 88) + 1);

                    if(percentage < 50) {
                        percentage += 40;
                    }

                    console.log(percentage);

                    var data = {
                        secret: secret,
                        _ : _,
                        per: percentage
                    };

                    if(secret.CorrectAnswer === 1) {
                        compiledTemplate = _.template(FalseViewTemplate)(data);

                    } else {
                        compiledTemplate = _.template(WrongViewTemplate)(data);
                    }

                    $("#cards")
                        .hide()
                        .stop()
                        .css({'left': 0})
                        .html( compiledTemplate )
                        .fadeIn(function(){
                            loadScreen(id);
                            $("#loadScreen").empty().hide();
                        });
                }
            });
        }
    });

    // Return View
    return FalseView;
});