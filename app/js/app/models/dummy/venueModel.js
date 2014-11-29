// Filename: models/dummy
define([
    'underscore',
    'backbone'
], function(_, Backbone){
    var venueModel = Backbone.Model.extend({
    url: "ajax/collection.json"
        //urlRoot : 'https://api.mongolab.com/api/1/databases/secretspore/collections/secrets?apiKey=3ITgiOBHpdq5jCkH1thwXeeIpIciNXDI&q=%7B%22title%22:%22this%20is%20a%20test%22%7D'
    });

    // Return the model for the module
    return venueModel;
});