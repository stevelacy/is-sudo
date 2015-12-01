'use strict';

var exec = require('child_process').exec;

module.exports = function (cb) {

  var cmd = 'sudo -n true';
  var check = exec(cmd);

  check.on('exit', function(code) {
    if (code === 0) {
      return cb(true);
    }
    cb(false);
  });
};
