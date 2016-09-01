(function(app) {
  app.AppModule =
    ng.core.NgModule({
      imports: [ ng.platformBrowser.BrowserModule ],
      declarations: [ app.HelloWorldComponent ],
      bootstrap: [ app.HelloWorldComponent ]
    })
      .Class({
        constructor: function() {}
      });
})(window.app || (window.app = {}));
