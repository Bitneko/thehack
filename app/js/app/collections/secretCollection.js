define([
  'jquery',
  'underscore',
  'backbone',
  'app/models/secretModel'
], function($, _, Backbone, SecretModel){
  var SecretCollection = Backbone.Collection.extend({
    model: SecretModel,
    //url: "/secretspore/getallsecrets.php"
    url: "/ajax/collection.json"
    //url: 'https://api.mongolab.com/api/1/databases/secretspore/collections/secrets?apiKey=3ITgiOBHpdq5jCkH1thwXeeIpIciNXDI&s={"Id":1}'
  });
 
  return SecretCollection;
});