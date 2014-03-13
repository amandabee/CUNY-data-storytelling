Timelines: organizing timeline content, working with timeline tools
1. Look at timeline examples:
WashingtonPost Syria (http://www.washingtonpost.com/wp-srv/special/world/syria-timeline/index.html)

NYTimes Korea
http://www.nytimes.com/interactive/2013/02/05/world/asia/northkorea-timeline.html

WNYC
http://www.wnyc.org/blogs/empire/2012/may/07/timeline-pedro-espadas-long-dance-law/

What features work in timelines?

- proportionality of spacing of events
- next and previous buttons (users navigate linearly)
- balancing text and image
- grouping information, if possible (arab spring : note colors for kinds of events)
- integrating multimedia (video, audio, etc.)
- showing single event vs. period of time

Content in timelines

- unravelling a complex story
- filling in the gaps in your narrative
- re-shaping your narrative chronologically
- adding detail
- a timeline should stand alone and fit into your story, both. That’s a tricky -- balance to strike 

ex: Dominique fits it in as a sidebar to give us the history of CL in her story about missed connections: http://craft2-harper.2013.journalism.cuny.edu/2013/03/16/1415/


##Hands on with Timeline JS

[Zach Wise's Timeline JS](http://timeline.verite.co/)
[Google spreadsheet template](http://timeline.verite.co/#fileformat)

1. Look at Timeline JS examples
2. Download template
3. Download gun legislation csv
4. import gun legislation csv into template, add rows
5. preview
6. add media (youtube, photo)


## Hands on with Vertical Timeline
Hands on: start by getting organized.

That file you made last week? It is going to get a lot fancier.

* You should have a folder for this class. You do, right?
* In that folder, make a new folder, give it a short title. "dataviz"
* Move your old "index.html" into the folder
* Copy it and rename it "timeline.html"
* Open your FTP client, add the "dataviz" directory and upload both files to it.
* Check that the file is there: http://digitalstorage.journalism.cuny.edu/amandahickman/dataviz/timeline.html

We're going to work with the local version of timeline.html and re-upload it.

WNYC's Vertical Timelines
http://johnkeefe.net/the-thinking-behind-wnycs-new-vertical-timeli 


http://www.wnyc.org/blogs/empire/2012/may/07/timeline-pedro-espadas-long-dance-law/ 
http://project.wnyc.org/charts/espada-timeline/index.html 

Another example
http://builtbybalance.com/github-timeline/ 


What is Tabletop JS? It is JavaScript (often the noun here would be "library" or "module" or "framework" but in this case Tabletop is a single script)
 that facilitates communication between structured data in a Google Spreadsheet and javascript.

We've seen a little JS in Highcharts -- my goal here is to get you all used to looking under the hood and knowing, at least, that a somewhere there's a stick that will keep that hood from crashing down and decapitating you and that there's a dipstick someplace that you can use to check your oil levels. Maybe that's as far as you go, but the secret truth is that once you start looking around, even changing the fanbelt is not actually rocket science. Sometimes it is a matter of finding that person (I'm embarrassed to report that in my household when it comes to automobiles that's my dad or brother, sewing and sewing machines, my mother.) who you feel safe calling up to say "So, it seems like there's a big round part with a knob on it, and the rubber thing..." so they can say "you mean ... the alternator? and the fan belt?" and they won't think less of you. You do this all the time with stories. Hopefully by know you've learned to own your ignorance, to call up UNHCR and say "I'm trying to understand this and I need you to explain it to me."
 

Walk through:
https://github.com/balancemedia/Timeline -- they include all the moving parts so we're going to download them from github.

"Download the repository as a zip file"
Extract it to your folder. (where does your computer keep downloads?)

* We've handled number and text formats. Date formats aren't a lot harder.

https://docs.google.com/spreadsheet/ccc?key=0AqaPuVjW5_0OdFdEcjYtNnlwRGk4YTBRMVBTX0RZTWc#gid=0 
 
I'm cribbing from a history of laptops: http://en.wikipedia.org/wiki/History_of_laptops
I'm setting a terrible example too.

At this step: "Now follow the instructions over at Tabletop.js to publish the Spreadsheet." all we're doing is File > Publish to the Web ... (There's a better help page at
https://github.com/jsoma/tabletop)

If htis is my URL at that step, we can dismantle the URL.
https://docs.google.com/spreadsheet/pub?key=0AqaPuVjW5_0OdFdEcjYtNnlwRGk4YTBRMVBTX0RZTWc&single=true&gid=0&output=html 


Read all the options. Do you have questions about any of them? Get in the habit of sniffing around.