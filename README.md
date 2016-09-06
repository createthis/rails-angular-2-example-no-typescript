# Why?

In mid-2016, before Angular 2.x was out of RC, I was tasked with writing a new Rails 5 project
using Angular for the frontend. Since Angular 2 hadn't yet been officially released, I chose
Angular 1.5. However, shortly after integrating Angular 1.5, management mandated upgrade to 
Angular 2.0 since 1.5 would possibly be End of Life'd shortly after 2.0's release.

The catch? I had to do it without Typescript. Management declared a moratorium on Typescript.
This example is the result.

Note: I don't recommend anyone actually go this route. I'm not a fan of Typescript, but I
know from experience it's ALWAYS best to follow the Path of Least Resistance in development.
ES5 is *not* the Path of Least Resistance in the Angular 2.0 world at the time of this writing
(9/6/2016).

Management eventually lifted our moratorium on Typescript, so I created a dedicated Typescript
frontend project, separate from Rails 5. This is my recommendation for Angular 2.x and Rails,
currently. Keep them in separate projects and communicate via RESTful web services.

The repo is here for posterity and to satisfy curiosity.

# Problems

1. The biggest problem with this example is the lack of ES5 documentation available for Angular 2.0
on the Angular website at the time of this writing. I found googling for "Angular 2 ES5" was my
best bet when attempting to find ES5 specific solutions to problems.

1. The second biggest problem is that top level components must be bootstrapped from
app/assets/javascripts/ng-app/app.module.js

    This means that if you include app.module.js in the asset pipeline, as I have done in this example,
you get precisely ONE top level component and you MUST include it on every Rails view, or else you
get JS errors because Angular cannot bootstrap the top level component. Ideally, we would serve a 
custom app.module.js for each Rails view that required Angular 2 functionality. Alternatively, it
would be nice if Angular 2 would do away with the concept of top level components and/or make
bootstrapped components optional.

# Installation

* Install ruby 2.3.1 via rbenv or rvm

* bundle install

* npm install

* rails s

* visit http://localhost:3000/ in a browser

# Development

* Angular 2 is split between /app/assets/javascripts/ng-app (components, etc) and /public (templates)
