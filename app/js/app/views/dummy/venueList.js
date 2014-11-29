/**
 * Venue List View
 */
define([
    // These are path alias that we configured in our bootstrap
    'jquery',
    'underscore',
    'backbone',
    'app/models/dummy/venueModel',
    'app/collections/dummy/venueCollection',
    'text!templates/dummy/list.html'
], function($, _, Backbone, VenueModel, VenueCollection, VenueListTemplate){
    'use strict';

    var VenueListView = Backbone.View.extend({
        el: $('#venueList'),

        render: function() {

            var venueCollection = new VenueModel();
            venueCollection.fetch({
                success: function(e) {

                    var allvenues = e;

                    console.log(allvenues)

                    var data = {
                        venues:allvenues,
                        _:_
                    };

                    var compiledTemplate = _.template(VenueListTemplate)(data);
                    $("#venueList").html( compiledTemplate ); 

                }
            });
        }
    });

    // Return View
    return VenueListView;
});
