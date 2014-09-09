/**
 * Waits until `date`, then logs "Times is up" at the date and time.
 *
 * @param {Date} date Input date and time.
 * @param {Function} fn Timer goes of at the date and time.
 */

module.exports.setReminder = function(date, cb) {
	var nowMiliseconds = Date.now();
	var delay = date - nowMiliseconds;
	console.log(date);
	console.log(delay);
	setTimeout(cb, delay); 

};
