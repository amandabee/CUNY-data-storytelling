Did you have any trouble with the first walk through?

Let's look at what you were doing. 

This isn't functionally all that different than the map styles dialog, right?

The background piece on Snow has a bad URL. Should be:
<http://www.r-bloggers.com/john-snows-cholera-data-in-more-formats/>

The first zip file that you downloaded includes a whole bunch of garbage and a handful of things that make up individual shapefiles.

Here's the thing: there is no standardized file format for geographic information. ArcGIS uses the "shapefile" format, and that has been widely adopted by other GIS tools. Googlemaps uses their own KML format. They have the same info, they're just structured differently. 

# Why do we do this?

CartoDB is [Free Software](https://github.com/CartoDB/cartodb) and Gmaps is struggling to keep up. 

[Realtime Road Closures in National Parks](http://maps.nps.gov/blri/road-closures/)

You can't do this with Google Maps: [Rolling Stones](http://vizzuality.github.io/rollingstonesmap)  and they published [the source for that](http://vizzuality.github.io/rollingstonesmap/).  Nor this: [Abortion Access](http://www.thedailybeast.com/articles/2013/01/22/roe-v-wade-turns-40.html). The code for the abortion map isn't published anyplace, but Mike Keller and Brian Abelson and Martin Burch all convene at Think Coffee on Mercer every Tuesday night so if you can get halfway there, you can go ask them for help with the last mile. 

# Hands on

## Reviewing the first assignment

###What did you do?

What are you sizing the bubbles by?

*The "count" value*

When you changed the "Radius" in the Visualization Wizard, what did that do?   

*Changed the range of sizes of the bubbles*



### What was that SQL?

	SELECT cartodb_id, the_geom_webmercator, count, 'cholera' as layer
	FROM cholera_deaths

	UNION ALL

	SELECT cartodb_id, the_geom_webmercator, NULL as count, 'pump' as layer
	FROM pumps
	
How many of you noticed that CartoDB was offering autocomplete?

Did you look back at your tables? These values that you're selecting, they reflect column names in your tables. 

After you added the SQL, did you notice the change in your map? 

*Probably not. It just added some pumps, as points.*

### What was that CSS?

	#cholera_deaths [layer='pump'] {
		marker-width: 15.0;
		marker-fill: #3399FF;
		marker-line-color: black;
		marker-line-width: 0;
		marker-opacity: 1;
		marker-placement: point;
		marker-type: ellipse;
		marker-allow-overlap: true;
	}
	
Did you look at the rest of your css? It just organizes a series of marker width values based on the styles you set in the wizard. This, right here, is part of what makes CartoDB so powerful. You have a lot more control. 


### Sharing has changed.

You might have noticed that there's no "Share" button on the screen. You have to click "Visualize" and then "Publish" -- read the pop-outs. 

http://cdb.io/1bbI87G

## So now we want to do some work on [Visualizing Relationships](http://developers.cartodb.com/tutorials/visualizing_relationships.html)

I got an error:	
	There is a problem with the map tiles. Please, check your CartoCSS style.
	
So I looked at my CSS and I see the error:
	ERROR: column "layer" does not exist
	
and the CSS has this line: `#cholera_deaths [layer='pump']` which is looking for a "layer" value, but our new SQL doesn't define a column named "layer" -- if I remove that style, I the error disappears. 

### Run What?

When we get to "Creating polygons from points" they just tell you to "run" some SQL. What does that mean? We're just replacing our SQL with new SQL. 

Look at the number of points in the table view,

ST\_ConvexHull and ST\_Envelope are  PostGIS terms. We're going to skip a lot of the geometry tweaks. 

Use "Find Differences" in TextWrangler if you aren't sure why your SQL / CSS isn't working. 

We're going to skip some things. 

### Sets of Points

Keep walking through.

### Quantile? Jenks?
[Check out the documentation](http://developers.cartodb.com/documentation/using-cartodb.html5)  but roughly, quantiles will break into buckets that each hold the same number of records. Equal intervals with break into buckets that are equidistant.

Example:  I have age data for eighteen people: [11, 11, 12, 13, 14, 16, 19, 20, 20, 20, 23, 25, 26, 26, 31, 37, 38, 38] and I want to break them into three buckets:  

*Quantiles* would generate buckets of six people each: 
[11, 11, 12, 13, 14, 16] [19, 20, 20, 20, 23, 25] [26, 26, 31, 37, 38, 38]

*Equal Intervals* should generate buckets that are 9 years apart: either 11-19, 20-29, 30-38 
 [11, 11, 12, 13, 14, 16, 19] [20, 20, 20, 23, 25, 26, 26] [31, 37, 38, 38]

[More examples](http://www.ncgia.ucsb.edu/cctp/units/unit47/html/comp_class.html)

*Jenks* is [more complex](http://en.wikipedia.org/wiki/Jenks_natural_breaks_optimization), but roughly strikes a compromise between spacing the means for each group as far apart as possible while minimizing the standard deviation within each group. The Jenks cut offs happen in our case at 19 and 26:

[11, 11, 12, 13, 14, 16, 19] [20, 20, 20, 23, 25, 26, 26] [31, 37, 38, 38]

If you play around with the numbers, you'll see that if you break our population into quantiles, the eldest group, the 26-38 year olds, has an average deviation from the mean of 5 years, while the 11-19 year olds don't vary nearly as much. 

*Heads/Tails* finds the mean of your data (in our case, 22.2222) and puts a break there. Then finds the mean of everything above that point (30.5) and adds a new break, and finds the mean of everything above that break (36). If you've selected 3 buckets, the method will find 3 breaks. 
[11, 11, 12, 13, 14, 16, 19, 20, 20, 20] [23, 25, 26, 26] [31] [37, 38, 38]



# CartoDB FAQ

Some followup from our CartoDB session, on making your own tables, finding reference material and managing an account that only gets to make 10 maps.

**How do I make a table?** Conceptually, merging a data table (information about places) and a shapefile (information about the location of places) is not so different from merging two tables in Google Fusion Tables. The syntax is different, but the process is the same — you have to tell a database that some column in this table has values that match some column in that table and asking the database to make a new file that contains both tables. In CartoDB we call this [merging  tables](http://developers.cartodb.com/documentation/using-cartodb.html#sec-6).

**SQL Reference?** CartoDB uses [SQL](http://en.wikipedia.org/wiki/SQL). On the one hand, that’s great. SQL is a standard language, so it is portable. On the other hand, it is a complete database language that does loads of things above and beyond managing map data. So the command references are bigger and are not necessarily specific to CartoDB. For all parts of your query that aren’t geospatial, the [PostgreSQL reference](http://www.postgresql.org/docs/9.1/static/) is what you want. When you want to add geospatial components to your queries, checkout the [PostGIS reference](http://postgis.net/docs/manual-1.4/). CartoDB’s own [reference pages](http://developers.cartodb.com/documentation/using-cartodb.html) are quite helpful, too.

*What do you do when you get to 10 tables?* The answer: Start deleting. CartoDB is an excellent tool, but if you want your maps hosted by the good folks at Vizzuality, you are going to wind up paying for hosting if you keep making maps. So keep that in mind if you do publish a map: turn over the files to the publication so that continuing to host it is on their dime and not yours.

# Getting Help

https://groups.google.com/forum/#!forum/cartodb

# CartoDB Templates


http://developers.cartodb.com/

[Double Map](http://cartodb.github.com/cartodb-publishing-templates/doublemap/)

[Info Windows](https://github.com/amandabee/cunyjdata/tree/master/mapping/cartodb)
