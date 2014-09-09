/**
 * Waits until `date`, then logs "Times is up" at the date and time.
 *
 * @param {Date} date Input date and time.
 * @param {Function} fn Timer goes of at the date and time.
 */
 
module.exports.setReminder = function(date, fn) {
	console.log(date)
  console.log('Reminder will go off at %d:%d', date('hour'),date('minute'));
  setTimeout(function() {

    console.log('Thing one');
    fn();
  }, 3000);
};
