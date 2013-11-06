var Marionette = require('marionette-client');
// all drivers conform to this api
// var Marionette = require('marionette-client');
var driver = new Marionette.Drivers.TcpSync();

driver.connect(function(err) {

  client = new Marionette.Client(driver);

  client.plugin('apps', require('../'));
  client.startSession();

  client.apps.launch('app://calendar.gaiamobile.org');
});
