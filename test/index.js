'use strict';

var isSudo = require('../');
var should = require('should');

describe('is-sudo', function() {

  it('should check if sudo is sudo', function(done) {
    isSudo(function(check) {
      should(check).equal(false);
      done();
    });
  });

});
