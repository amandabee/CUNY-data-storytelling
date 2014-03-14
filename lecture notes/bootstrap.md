#Bootstrap

Starting with your map, let's put that on an HTML page. Call it `map.html` and start with a super basic framework:

	<html>
		<head>
			<title>My Title</title>
		</head>
		<body>
		</body>
	</html>

From the "visualizations" on my CartoDB dash, I'm going to go into the Share and get the "EMBED URL":

	http://cdb.io/1fuwDdA
	
There's an iFrame code there, but I want you to iFrame it manually. So we'll put this in the body of the page:

	<iframe src="http://cdb.io/1fuwDdA"></iframe>
	
And add some attributes:

	<iframe src="http://cdb.io/1fuwDdA"  height="100%" width="100%" frameborder="0"></iframe>
	
## SimpleHTTP
Open a terminal, use `cd` to navigate to your data viz folder. Run `python -m SimpleHTTPServer` and then visit <http://localhost:8000>

This launches a mini web server in that directory. We'll do more fun things at the command line before the semester is over, but this is incredibly useful. 

You can make this a bit easier with [System Prefs](https://stackoverflow.com/questions/420456/open-terminal-here-in-mac-os-finder) -- right click on any folder and say "new terminal at folder" -- use `pwd` to see where you are. 


## Some Tips:
Web servers are all different. Some are case sensitive, some aren't. Save yourself a lot of heartache by using single word lower case file names. 

# Bootstrap
We're not going to go crazy learning HTML, but there are a few things we can do to make your page a smidge prettier. The Twitter Bootstrap is a set of CSS descriptions that make modern looking layouts a lot easier to build. Take a look at the [basic bootstrap template](http://getbootstrap.com/getting-started/#template) But we're going to use a CDN. So add these to the head of your page:

	<!-- Latest compiled and minified CSS -->
	<link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css">

	<!-- Optional theme -->
	<link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap-theme.min.css">

And we'll put this down at the bottom:

	<!-- Latest compiled and minified JavaScript -->
	<script src="//netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min.js"></script>


We're using a content delivery network. I think we might have talked about this but basically … 
[a CDN is a good idea](https://encosia.com/3-reasons-why-you-should-let-google-host-jquery-for-you/). Caching is the best reason. 

## Test that out
Combine the map iframe and a bootstrap template. Make sure it works.

## Use some bootstrappery

	<div class="container">
	  <div class="jumbotron">
	    <h1>Rats!</h1>
	    <p class="lead">Rats are everywhere. And that is really gross.</p>
	  </div><!-- /jumbotron -->
	<iframe …> </iframe>
	</div><!-- /jcontainer -->  
	
### The Grid
The [grid is handy](http://getbootstrap.com/css/#grid) for some really basic things. 

Take a look at this NYT story on [public sector salaries](http://www.nytimes.com//interactive/2011/03/06/us/public-private-employees.html) -- let's grid that out. 

## Troubleshooting
In your finder preferences, show all file extensions.

## More fanciness
Hop over to [Presentation](presentation.md) and if we get through it we can talk about using bootstrap's [color classes](http://getbootstrap.com/css/#helper-classes) instead of getting carried away with perfect colors. 

[Quick Floats](http://getbootstrap.com/css/#helper-classes-floats) are also pretty nice. 