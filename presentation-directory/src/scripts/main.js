// Require Node modules in the browser thanks to Browserify: http://browserify.org

var bespoke = require('bespoke'),
  camera = require('bespoke-camera'),
  cube = require('bespoke-theme-cube'),
  keys = require('bespoke-keys'),
  touch = require('bespoke-touch'),
  bullets = require('bespoke-bullets'),
  backdrop = require('bespoke-backdrop'),
  scale = require('bespoke-scale'),
  hash = require('bespoke-hash'),
  progress = require('bespoke-progress');


// Bespoke.js
var deck = bespoke.from('#presentation', [
  cube(),
  keys(),
  touch(),
  bullets('li, .bullet'),
  backdrop(),
  scale(),
  hash(),
  progress(),
  camera()
]);

bespoke.from('#presentation', [
  bespoke.touch('vertical')
]);

bespoke.plugins.progress = function(deck) {
  var progress = document.querySelector('#progress');
  deck.on('activate', function(event) {
    progress.style.width = (
      (event.index * 100) /
      (deck.slides.length - 1)
    ) + '%';
  });
};



bespoke.from('#presentation', [
  backdrop()
]);

