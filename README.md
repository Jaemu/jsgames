jsgames
=======

A quick and dirty primer for creating canvas games with input and an animation loop.

Disclaimer: The CSS has not been written with performance or cross-browser compatibility in mind, mostly just to provide a quick and dirty sample in Chrome.  For handling issues such as FOUT when using Google Fonts and vendor-specific styles, please refer to the links in the reference section.

**Concepts:**
- Module vs Thing.prototype.function
- Animating a canvas element in vanilla javascript
- Maintaining a particle array and updating position

(work in progress)

**Run it:**
- Navigate into the folder with index.html
- run `python -m SimpleHTTPServer`
- go to localhost:8000 in your browser

**Common Pitfalls**
- The height & width of your 2d context is not responsive.  Make sure you apply all the size attributes to your canvas before calling the 2d context.



References:
------------

**Javascript**

[Awesome slideshow framework, because you know everyone else is going to use Google Presentation](http://lab.hakim.se/reveal-js/)

[A re-introduction to JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript)

[Introduction to the js module pattern](http://www.adequatelygood.com/JavaScript-Module-Pattern-In-Depth.html)

[Javascript Garden](http://bonsaiden.github.io/JavaScript-Garden/)

[Rebecca Murphey's Javascript assessment repo](https://github.com/rmurphey/js-assessment)

[An introduction to Require.js and asynchronous module loading](http://javascriptplayground.com/blog/2012/07/requirejs-amd-tutorial-introduction/)

[Javascript patterns by Addy Osmani -- free ebook with pattern examples](http://addyosmani.com/resources/essentialjsdesignpatterns/book/)

**CSS**

[Typekit's WebFont Loader](https://github.com/typekit/webfontloader)

[List of vendor prefixed style properties and values](http://peter.sh/experiments/vendor-prefixed-css-property-overview/)

[Compass: mixins for handling things like css transitions and vendor prefixes](http://compass-style.org/)

**Productivity Soundtrack**

[Grooveshark, open to suggestions as well](http://grooveshark.com/#!/playlist/GSD+2+0+Brogramming+101/94418579)
