
The tutorials that follow were adapted from Andrew Hill's Spring 2013 talk at the J-School last semester.

Upload these data sets to your CartoDB dash:
[NYC Bike Racks](http://bit.ly/14SybyR) and [Bike Lanes](http://bit.ly/17Xw6xE) from the [DOT](http://www.nyc.gov/html/dot/html/about/datafeeds.shtml#Bikes)  (Note: I had trouble with the Bike Racks file so I downloaded a new shapefile from the DOT. 

[City Blocks](http://bit.ly/12Kyo3x) from [DCP](http://www.nyc.gov/html/dcp/html/bytes/dwndistricts.shtml)

We also need a map of [NYC CitiBike Stations](https://dl.dropboxusercontent.com/u/1307405/CartoDB/workshop/bestblocks/citibike_stations.zip) from Andrew Hill. 

-We also need [NYC Best Blocks](http://bit.ly/1fsb1Dq) from Andrew Hill. <-- just use city blocks for this. -

#### Best Blocks

Start with the CitiBike stations and the DCP block data. Look at the map of citibike stations. Change the basemap to Dark. 

We're going to start tweaking the 'nycblocks' table, to add columns to it. First we want to add a "station_dist" numeric column. Then we're going to populate it: 


	UPDATE nycblocks bb 
	SET station_dist = 
	(
	 SELECT  
	 ST_Distance(the_geom::geography, 
	 bb.the_geom::geography) 
	 FROM citibike_stations 
	 ORDER BY 
	 the_geom <-> bb.the_geom LIMIT 1
	)

Use [ST_Distance](http://www.postgis.org/docs/ST_Distance.html) to calculate the distance between a point (a city bike rack) and a block. 

I know, I know. You'll never remember how to do this. It's okay. First, you can stick to making flat maps with CartoDB. Second, you can check out [the CartoDB Vimeo channel](https://vimeo.com/channels/cartodb) and their collection of [tutorials](http://developers.cartodb.com/tutorials.html) for syntax you can crib. 

####  How many racks per block:

Manually create a new column, of type "Number"  in `nycblocks` -- call it "bikescore". Make a "bikescore_norm" column, too. We'll use that in a minute.

In the table view   

	SELECT COUNT(*) racks, b.cartodb_id FROM nycblocks b, city_racks_2013_06_28 r WHERE ST_Intersects(b.the_geom, r.the_geom) GROUP By b.cartodb_id

What do you think [ST_Intersects](http://www.postgis.org/docs/ST_Intersects.html) does? Let's look at that sorted.  

	SELECT COUNT(*) racks, b.cartodb_id FROM nycblocks b, city_racks_2013_06_28 r WHERE ST_Intersects(b.the_geom, r.the_geom) GROUP By b.cartodb_id ORDER BY count(*) DESC


	WITH block_racks AS (
	SELECT COUNT(*) racks, b.cartodb_id FROM nycblocks b, city_racks_2013_06_28 r WHERE ST_Intersects(b.the_geom, r.the_geom) GROUP By b.cartodb_id
	)

	SELECT count(*), racks FROM block_racks GROUP BY racks ORDER BY racks DESC
	

We actually want to get more precise, : 

	SELECT COUNT(*) racks, b.cartodb_id FROM nycblocks b, city_racks_2013_06_28 r WHERE ST_DWithin(b.the_geom, r.the_geom, 0.00001) GROUP By b.cartodb_id
 

	UPDATE nycblocks n SET bikescore = (SELECT count(*) FROM nyc_bike_routes_2012 WHERE ST_DWithin(the_geom, n.the_geom, 0.00001))

	UPDATE nycblocks n SET bikescore = bikescore + COALESCE((SELECT sum(total_rack) FROM city_racks_2013_06_28 WHERE ST_DWithin(the_geom, n.the_geom, 0.00001)),0)	
	

Now we need to normalize the data. PostGIS's [ST_Area](http://www.postgis.org/docs/ST_Area.html) will return the area, in square feet, of an area. So we want to know something like a ration of bike racks to square feet:

		SELECT ST_Area(the_geom) FROM nyc_bestbikeblocks ORDER BY ST_Area(the_geom) DESC

		SELECT ST_Area(the_geom::geography) FROM nyc_bestbikeblocks ORDER BY ST_Area(the_geom) DESC

		UPDATE nyc_bestbikeblocks n SET bikescore_norm = bikescore * 100000 / ST_Area(the_geom::geography)

Then we can map it by the normalized bike score. 

####  How about distance to racks?

How would we tweak the query above to create a "rack_dist" column? Is that a more interesting distance function? 

####   Styling bike lanes and racks

        #nyc_bike_routes_2012{
          line-width: 1;
          line-color: #3366FF;
          line-opacity: 0.7;
          [bikedir = '2']{
            line-color: #33FF00;
          }
        }

        #nyc_bike_routes_2012{
          line-width: 1;
          line-color: #3366FF;
          line-opacity: 0.7;
          [bikedir = '2']{
            line-color: #33FF00;
          }
          [lanecount > 1]{
              line-width: 2;
          }
        }

        #city_racks_2013_06_28{
          marker-fill: #FFFFFF;
          marker-opacity: 0.7;
          marker-allow-overlap: true;
          marker-placement: point;
          marker-type: ellipse;
          marker-width: [total_rack];
          marker-line-width: 0.5;
          marker-line-color: #006600;
          marker-line-opacity: 0.9;
        }

	SELECT * FROM city_racks_2013_06_28 ORDER BY totalracks DESC

   
####     Build a map:



		