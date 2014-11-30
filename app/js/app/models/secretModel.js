define([
    'underscore',
    'backbone'
], function(_, Backbone){
    var secretModel = Backbone.Model.extend({
    	url: "/secretspore/getsecret.php"
    	//url:"https://api.mongolab.com/api/1/databases/secretspore/collections/secrets?apiKey=3ITgiOBHpdq5jCkH1thwXeeIpIciNXDI"
    });

    // Return the model for the module
    return secretModel;
});