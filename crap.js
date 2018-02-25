/* For now I'll use old-school JavaScxript so I don't have to use Babel. I'll most likely make a new-school version with ES6 at some point. */
var crapCookie = (function(){
	// Stuff to be kept in the clusure.

	// Object to return.
	return {
		create: function(options){
			// No options, no result.
			if (!options || !options.key) {return;};

			// Set some local variables with whatever options are passed in.
			var key			= options.key,
				value		= options.value		|| '',
				days		= options.days		|| 1,
				hours		= options.hours		|| 0,
				minutes		= options.minutes	|| 0,
				expire		= new Date;

			// Fall through because zero is actually a truthy value.
			days = (options.days===0) ? 0 : days ;

			expire.setTime(
				// Timestamp in milliseconds plus other units of time converted into milliseconds.
				expire.getTime() + 
				(days * 24 * 60 * 60 * 1000) +
				(hours * 60 * 60 * 1000) +
				(minutes * 60 * 1000)
			);

			document.cookie = key + "=" + value + "; expires="+ expire.toGMTString();
		},
		read: function(key){
			// https://stackoverflow.com/questions/10730362/get-cookie-by-name

			var cookies = "; " + document.cookie;
			var parts = cookies.split("; " + key + "=");

			if (parts.length === 2) {
				console.log('read');
				return parts.pop().split(";").shift();
			} else {
				throw "No cookie by the name: " + key;
				return false;
			}
		},
		adjust: function(options){
			// We just create another cookie of the same name and overwrite.
			if (!options || !options.key) {return;};

			if (this.read(options.key) ) {
				this.create(options);
			}
		},
		purge: function(key){
			this.adjust({
				key: key,
				value: '',
				days:0,
				hour:0,
				minutes:0
			});
		},
	};
}());