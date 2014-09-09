var chai = require('chai');
var expect = chai.expect;

var functions = require('../index');
var setReminder = functions.setReminder;

describe('setReminder()', function() {
  it('timer goes off when reminder is over', function(done) {
	// var date =Date.parse("Wed, 09 Sep 2014 12:00:00 GMT");
	// TODO: can we make this work?
	var date = new Date(2014, 9, 9, 13, 40);
    setReminder(date, done);
  });
});
