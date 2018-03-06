#crap-cookie
A cookie utility for creating, reading, adjusting and purging JavaScript cookies.

##Installation
There aren't any tricks to installing this. You don't have to create an instance or mess with prototypes. As soon as the file loads, a global variable called <pre>crapCookie</pre> is defined on the window object.

##Create
Creates a cookie

Example: <code>createCookie(options)</code>


<ul>
	<li><strong>key</strong>: the name of the cookie. It's called a key because it's part of a key/value pair.</li>
	<li><strong>value</strong>: the string value that will be stored in the cookie.</li>
	<li><strong>days</strong>: defaults to <code>1</code>. If you want the cookie to last less than a day, then pass in zero along with some kind of number for hours and/or minutes.</li>
	<li><strong>hours</strong>: defaults to <code>0</code>. This number will be added to the lifespan of the cookie in hours.</li>
	<li><strong>minutes</strong>: defaults to <code>0</code>. If a number is assigned here, then that number will be added to the cookie's total lifespan in minutes.</li>
</ul>




##Read
Reads a cookie

##Adjust
Alters a cookie

##Purge
Gets rid of a cookie.
