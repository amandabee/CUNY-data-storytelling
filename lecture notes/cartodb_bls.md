# CartoDB BLS

In 2011, the BLS published a [map of fatal workplace injuries](http://bls.gov/opub/btn/volume-2/death-on-the-job-fatal-work-injuries-in-2011.htm) by state. 

Good discussion questions:
Are these colors continuous or categorical? Should they be? Is anyone surprised that CA and TX have a lot of workplace injuries? How can we improve on this?

Takeaway: BLS data is mapped, but it isn’t normalized to the population and the gradient makes no sense at all.

So we'll recreate it: 
[BLS Fatality Data (csv)](cartodb/)
[2011 Population Estimates](https://www.census.gov/popest/data/state/totals/2011/tables/NST-EST2011-01.csv) (via [census.gov](http://www.census.gov/popest/data/historical/2010s/vintage_2011/state.html))

Combine those two in a spreadsheet, first.  Use "Save As" to create a new spreadsheet so you don't clobber your data. 

Use `=find()` to confirm that state names match. They will until ~New York

Use `=G10/E10` to get fatalities per capita, talk about scientific notation, then `=(G10/E10)*100000` for per 100,000

##Upload to CartoDB

Upload the CSV to CartoDB. Now you need a shapefile. Get a US State file from [NationalAtlas.gov](http://nationalatlas.gov/mld/statesp.html) or [NOAA](http://www.nws.noaa.gov/geodata/catalog/national/html/us_state.htm) or this [much, much smaller](http://geocommons.com/overlays/21519) file from GeoCommons. (Use the KML, the shapefile doesn't have a projection)

GoogleMaps will only take KML files, CartoDB will take ShapeFiles or KML, but don't use Safari -- a shapefile is a bundle of database files, you don't want to unzip it. 

## Merging
CartoDB used to make merging harder but they've worked a few things out. 

Keep both open: what columns can we use to combine these two? 

CartoDB has a [good explanation](http://developers.cartodb.com/tutorials/joining_data.html) of the join process. It isn't actually straightforward.

	UPDATE fatalities_per_capita
	SET the_geom = 	us_states.the_geom
	FROM us_states
	WHERE us_states.state = fatalities_per_capita.state
		

### Note
The first time I tried this I went the other way and hit some useful errors. Noted here for future reference. 

Add a numeric column: "bls_fatalities_per_100k"

	UPDATE us_states 
	SET bls_fatalities_per_100k = 	fatalities_per_capita.fatalities_per_capita
	FROM fatalities_per_capita
	WHERE us_states.name = fatalities_per_capita.state

Error: `column "bls_fatalities_per_100k" is of type double precision but expression is of type text`  -- what do we think that means? 

A little more on [double precision](http://www.postgresql.org/docs/current/static/datatype.html). We have two choices: we can go to the first table and change the column type to numeric. Or we can use `to_number(fatalities_per_capita.fatalities_per_capita, '999D9999999')` to transform the string into a number in the query. 

## Display
Use the wizard first. Bubbles for population, color for percapita. 

What do methods mean? [Learn](https://github.com/amandabee/cunyjdata/blob/master/lecture%20notes/cartodb.md#method) This was a little [buggy](https://gis.stackexchange.com/questions/84562/am-i-misunderstanding-equal-interval) but might be fixed by now.

## Put it on a web page


## Where to Find Boundary Files
+ [NYC:](http://www.nyc.gov/html/dcp/html/bytes/dwndistricts.shtml)
+ [CUNY Research Center](http://researchcenter.journalism.cuny.edu/digital-maps-database/)
+ [Google Fusion Table search](http://www.google.com/fusiontables/search)
+ [NYC Data sets](https://github.com/jweir/nyc-gov-data/blob/master/data/nyc_data_sets.markdown)
+ [GeoCommons](http://geocommons.com/)
+ [CartoDB's Common Data](https://cunydata.cartodb.com/dashboard/common_data)
+ [Census.gov](https://www.census.gov/geo/maps-data/)




