(function(app) {
  app.HelloWorldComponent =
    ng.core.Component({
      selector: 'hello-world',
      templateUrl: '/hello-world.component.html'
    })
      .Class({
        constructor: [ng.core.ElementRef, function(elementRef) {
          this.elementRef = elementRef;
          var native = this.elementRef.nativeElement;
          var myattr = native.getAttribute("say");
          this.say = myattr;
        }],
      });
})(window.app || (window.app = {}));
