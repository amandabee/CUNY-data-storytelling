If you're just getting started making maps online, start with Google Maps, but they're not your only option. Many Eyes does well with [state and country level maps](http://www-958.ibm.com/software/data/cognos/manyeyes/page/US_State_Map.html). [John Keefe blogs](http://johnkeefe.net/) relentlessly about his Google mapping projects, how they work, and [what he's learned](http://thingsivelearned.posterous.com/). [CartoDB](http://cartodb.com/) is new and more powerful and flexible than Google Maps. It is also more complex. [MapBox](http://mapbox.com/) is even more powerful, flexible, and complex.

Great places to start thinking about maps:
+ Dave Cole, John Keefe and Matt Stiles on [Mapping Best Practices](https://docs.google.com/presentation/d/1CA9R42cy4wjzIIWlyd0FMWvyW7BqsrzOGLQBgkwsy1Q/edit?pli=1#slide=id.p) (NICAR 2013)
+ [John Keefe, Albert Sun and Jeff Larson talk about making maps](http://hackshackers.com/blog/2011/11/06/how-we-made-our-maps/) (Hacks/Hackers 2011)
+ [Take Care of your Chloropleth Maps](http://vis4.net/blog/posts/choropleth-maps/)
+ [When Maps Shouldn't be Maps](http://www.ericson.net/content/2011/10/when-maps-shouldnt-be-maps/)
+ Amanda's [maps](http://jour72312.tumblr.com/tagged/maps) and [mapping](http://jour72312.tumblr.com/tagged/mapping) tags on Tumblr
<!--more-->
**Vocabulary Lesson**

You already know what [vectors](http://en.wiktionary.org/wiki/vector) and [polygons](http://en.wiktionary.org/wiki/polygon) are, right? Of course you do! Think back to geometry class or look them up. They're just words.

[KML](http://en.wikipedia.org/wiki/Kml) is the markup language that Google Earth uses to convey geographic information. You might never write KML from scratch, but it is worth at least looking under the hood to see how it works.Wikipedia has some [syntax examples](http://en.wikipedia.org/wiki/Kml). 

[Shapefile](http://en.wikipedia.org/wiki/Shapefile) is a geospatial vector data format. Like a KML file, a shapefile lists points that connect to make up polygons.

Google Maps uses KML, CartoDB wants shapefiles. If you find you have one and need the other, check out [Shape to Fusion](http://www.shpescape.com/) or [Gut those Shapefiles](http://gut.sfgeo.org/).

So where can you find KML and Shapefiles? 

+ Columbia's digital media tutorials include [New York City KML files](http://digitaltutorials.jrn.columbia.edu/?p=1217) that are Google Map ready
+ CUNY's research center maintains an extensive collection of [digital map files](http://researchcenter.journalism.cuny.edu/digital-maps-database/). 
+ You [search Fusion Tables](http://www.google.com/fusiontables/search) for data sources, though you'll want to be sure you know what you're getting. 
+ NYC political and administrative districts are available from the [Department of City Planning](http://www.nyc.gov/html/dcp/html/bytes/dwndistricts.shtml).
+ John Weir maintains a pretty comprehensive list of [NYC geographic data sets](https://github.com/jweir/nyc-gov-data/blob/master/data/nyc_data_sets.markdown), and if you learn a little git, you can contribute to it!
+ [GeoCommons](http://geocommons.com/) is a great resource for national and international map files.

[HTML](http://www.webmonkey.com/2010/02/html_cheatsheet/) shouldn't be a new word, but you'll use hypertext markup language to organize and style your map infoboxes, so a [cheatsheet](http://www.simplehtmlguide.com/cheatsheet.php) might come in handy.

**Get a Little Fancy**
[Color Brewer](http://colorbrewer2.org/) is an indispensible resource for finding good gradients and color palettes so you don't have to become an expert on color theory, color blindness, hue and saturation.

You can use more than the ten map markers that Google Maps offers. [ONA's MJ Bear Fellow Lucas Timmons has instructions for you](http://journalists.org/2012/03/29/expanding-the-map-markers-in-google-fusion-tables/).

Google Maps won't let you layer points over polygons by default, but you can do it with [Fusion Tables Layer Wizard](http://fusion-tables-api-samples.googlecode.com/svn/trunk/FusionTablesLayerWizard/src/index.html). Russell walks through the steps he took to create [ a map of public schools in NYC](http://datadrivenjournalism.2012.journalism.cuny.edu/new-york-public-school-ell/).

Last Spring, Martin Burch mapped out [Best Buy's spring sweep of store closures](http://datajournalism.2012.journalism.cuny.edu/2012/04/22/yellow-tag-sale-best-buy-to-close-50-stores/) using a [guide](http://michelleminkoff.com/2011/08/21/how-to-combine-multiple-fusion-tables-into-one-map/) that the AP's [Michelle Minkoff](http://michelleminkoff.com/) put together. 


[CartoDB](http://cartodb.com/) is new and more powerful and flexible than Google Maps. It is also more complex. They regularly [round up maps](http://blog.cartodb.com/post/30997218852/a-round-up-of-maps-build-by-cartodb-users) their users have made. Most of the examples there involve some substantial programming, however.

[MapBox](http://mapbox.com/) is even more powerful, flexible, and complex.

**For the Programmers**

[Quantum GIS](http://www.qgis.org/) is free and open source software that will let you do sophisticated geographic analysis. 

[Git](http://en.wikipedia.org/wiki/Git_%28software%29) isn't particular to map making at all, but it is a distributed version control system, and a great way to collaborate on software development. [Repo.or.cz](http://repo.or.cz/), [GitHub](https://github.com/) and [Gitorious](http://gitorious.com/) are all great places to can get free git hosting.

[Albert Sun's gmap library](https://github.com/albertsun/gmap-features) is an excellent resource.

If you start developing your programming skills, you can do a whole lot more using tools like [TileMill](http://mapbox.com/tilemill/), which is quite powerful, but takes a bit of technical know-how. The news apps team at ProPublica [built their own mapping library](http://www.propublica.org/nerds/item/introducing-simple-tiles-our-new-mapping-library), [published the code](http://propublica.github.com/simple-tiles/), and used it to power a very cool [redistricting explorer](http://projects.propublica.org/redistricting-maps/mcnerney).

**Think Things Through**
Clay Shirky wrote a [great review](http://jour72312.tumblr.com/post/44547848210) of Homicide Watch D.C. and Washington Post's Homicides in the District, two projects that look at murders in Washington D.C. through very different lenses. One starts with a map, one with photos. This is one great place to start thinking about what it means to map information and what story you're telling when you do that.

In class we talked a lot about gun data, which has been in the news. [*The Journal News* posted the addresses](http://www.lohud.com/interactive/article/20121223/NEWS01/121221011/Map-Where-gun-permits-your-neighborhood-) of every gun permit holder in Westchester
+ [*The New York World* took that data and organized it](http://www.thenewyorkworld.com/2013/01/15/gun-data/) into zip codes by density. And some very smart journalists weighed in on the Journal News' decision, including [Susan McGregor in CJR](http://www.cjr.org/behind_the_news/susan_mcgregor_on_gun_permit_d.php?page=all), [David Carr in NY Times](http://www.nytimes.com/2013/01/14/business/media/guns-maps-and-disturbing-data.html) and [Jeff Jarvis on his blog](http://buzzmachine.com/2013/01/14/public-is-public-except-in-journalism/)

Other mapping projects we looked at:
+ [WNYC's mayoral race tracker](http://project.wnyc.org/elections/mayor-tracker/index.html)
+ [USA Today's sprawl slider](http://usatoday30.usatoday.com/news/nation/story/2012-04-05/sprawl-census-urban/54007292/1) uses [Before/After](http://www.catchmyfame.com/catchmyfame-jquery-plugins/jquery-beforeafter-plugin/) to facilitate comparison between two maps.

**More tools? More questions?**
Lingering questions? Want to share a tool you love (or just kind of like)? Bonus points if they're [free (as in birds)](http://www.fsf.org/).

## More Tutorials
[CSV Sound System NICAR 14](https://github.com/csvsoundsystem/nicar-cartodb-postgis) -- a walk through that has you plot 
