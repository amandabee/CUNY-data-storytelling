Did you have any trouble with the first walk through?

Let's look at what you were doing. 

This isn't functionally all that different than the map styles dialog, right?

The background piece on Snow has a bad URL. Should be:
http://www.r-bloggers.com/john-snows-cholera-data-in-more-formats/

The first zip file that you downloaded includes a whole bunch of garbage and a handful of things that make up individual shapefiles.

Here's the thing: there is no standardized file format for geographic information. ArcGIS uses the "shapefile" format, and that has been widely adopted by other GIS tools. Googlemaps uses their own KML format. They have the same info, they're just structured differently. 


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