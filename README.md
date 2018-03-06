#crap-cookie
A cookie utility for creating, reading, adjusting and purging JavaScript cookies.

##Installation
There aren't any tricks to installing this. You don't have to create an instance or mess with prototypes. As soon as the file loads, a global variable called <pre>crapCookie</pre> is defined on the window object.

##Create
To create a browser cookie, use the global variable <code>crapCookie</code> with an options object as it's only argument. The options are:\

<ul>
	<li><strong>key</strong>: the name of the cookie. It's called a key because it's part of a key/value pair.<strong>If you do not pass in a key, then this method will do absolutely nothing.</strong></li>
	<li><strong>value</strong>: the string value that will be stored in the cookie.</li>
	<li><strong>days</strong>: defaults to <code>1</code>. If you want the cookie to last less than a day, then pass in zero along with some kind of number for hours and/or minutes.</li>
	<li><strong>hours</strong>: defaults to <code>0</code>. This number will be added to the lifespan of the cookie in hours.</li>
	<li><strong>minutes</strong>: defaults to <code>0</code>. If a number is assigned here, then that number will be added to the cookie's total lifespan in minutes.</li>
</ul>

So if you want to create a cookie which will last for three days, you would do it like this:
<pre>
crapCookie.create({
	key: "myCookieName",
	value:"Stuff I'm storing in this cookie.",
	days:3
});
</pre>

Days, hours and minutes will be added together an applied to a brand new date object, so you can pick any lifespan you want. Just remember that <strong>the day option defaults to one</strong>. If you want a cookie to last for less than a day then you need to set <code>days</code> to zero. For example, the following example will create a cookie which lasts for six hours and 32 minutes.

<pre>
crapCookie.create({
	key: "shortLivedCookie",
	value:"This cookie last for less than a day.",
	days:0,
	hours: 6,
	minutes: 32
});
</pre>

##Read
This method returns the value of the cookie you name. That's it. It's not trying to be fancy. Pass in a string, get a sting in return.
<pre>
crapCookie.read('shortLivedCookie');
// "This cookie last for less than a day."
</pre>

##Adjust
Okay, so... you don't really edit cookies. You just create a new cookie with the same name and overwrite the stuff that's in there. So this method works exactly like the <code>read</code> method.

Of course, this means that you can pass a brand new name into the <code>read</code> method to make a new cookie and pass an existing name into the <code>create</code> function to edit an existing cookie. I realize that this may seem redundant to you, but in my defense I must remind you that this entire repo is based upon a poop joke and I can deliver said poop joke without the letter "A". 

##Purge
This method will set an existing cookie's value to an empty string and it's expiration date to the current time. That's how you get rid of cookies in JavaScript, assuming that you're not mucking about in the dev tools.

This method works by calling the <code>adjust</code> method with a pre-defined options object. And before you say anything, <strong>yes</strong> I am aware that the <code>adjust</code> method is just going to call the <code>create</code> method with whatever options object it uses. You could easily use the <code>create</code>
