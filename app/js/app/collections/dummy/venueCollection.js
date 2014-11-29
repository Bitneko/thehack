define([
  'jquery',
  'underscore',
  'backbone',
  'app/models/dummy/venueModel'
], function($, _, Backbone, venueModel){
  var venueCollection = Backbone.Collection.extend({
    model: venueModel,
    //url: "https://api.mongolab.com/api/1/databases/secretspore/collections/secrets?apiKey=3ITgiOBHpdq5jCkH1thwXeeIpIciNXDI&q=%7B%22title%22:%22this%20is%20a%20test%22%7D",
    url: "http://getgoru.com/venue/hackathon/?format=json"

  });
 
  return venueCollection;
});