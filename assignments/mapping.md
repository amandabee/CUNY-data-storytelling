If you're just getting started making maps online, start with Google Maps, but they're not your only option. Many Eyes does well with <a href="http://www-958.ibm.com/software/data/cognos/manyeyes/page/US_State_Map.html">state and country level maps</a>. <a href="http://johnkeefe.net/">John Keefe blogs</a> relentlessly about his Google mapping projects, how they work, and <a href="http://thingsivelearned.posterous.com/">what he's learned</a>. <a href="http://cartodb.com/">CartoDB</a> is new and more powerful and flexible than Google Maps. It is also more complex. <a href="http://mapbox.com/">MapBox</a> is even more powerful, flexible, and complex.

Great places to start thinking about maps:
+ Dave Cole, John Keefe and Matt Stiles on <a href="https://docs.google.com/presentation/d/1CA9R42cy4wjzIIWlyd0FMWvyW7BqsrzOGLQBgkwsy1Q/edit?pli=1#slide=id.p">Mapping Best Practices</a> (NICAR 2013)
+ <a href="http://hackshackers.com/blog/2011/11/06/how-we-made-our-maps/">John Keefe, Albert Sun and Jeff Larson talk about making maps</a> (Hacks/Hackers 2011)
+ <a href="http://vis4.net/blog/posts/choropleth-maps/">Take Care of your Chloropleth Maps</a>
+ <a href="http://www.ericson.net/content/2011/10/when-maps-shouldnt-be-maps/">When Maps Shouldn't be Maps</a>
+ Amanda's <a href="http://jour72312.tumblr.com/tagged/maps">maps</a> and <a href="http://jour72312.tumblr.com/tagged/mapping">mapping</a> tags on Tumblr
<!--more-->
**Vocabulary Lesson**

You already know what <a href="http://en.wiktionary.org/wiki/vector">vectors</a> and <a href="http://en.wiktionary.org/wiki/polygon">polygons</a> are, right? Of course you do! Think back to geometry class or look them up. They're just words.

<a href="http://en.wikipedia.org/wiki/Kml">KML</a> is the markup language that Google Earth uses to convey geographic information. You might never write KML from scratch, but it is worth at least looking under the hood to see how it works.Wikipedia has some <a href="http://en.wikipedia.org/wiki/Kml">syntax examples</a>. 

<a href="http://en.wikipedia.org/wiki/Shapefile">Shapefile</a> is a geospatial vector data format. Like a KML file, a shapefile lists points that connect to make up polygons.

Google Maps uses KML, CartoDB wants shapefiles. If you find you have one and need the other, check out <a href="http://www.shpescape.com/">Shape to Fusion</a> or <a href="http://gut.sfgeo.org/">Gut those Shapefiles</a>.

So where can you find KML and Shapefiles? 

+ Columbia's digital media tutorials include <a href="http://digitaltutorials.jrn.columbia.edu/?p=1217">New York City KML files</a> that are Google Map ready
+ CUNY's research center maintains an extensive collection of <a href="http://researchcenter.journalism.cuny.edu/digital-maps-database/">digital map files</a>. 
+ You <a href=" http://www.google.com/fusiontables/search">search Fusion Tables</a> for data sources, though you'll want to be sure you know what you're getting. 
+ NYC political and administrative districts are available from the <a href="http://www.nyc.gov/html/dcp/html/bytes/dwndistricts.shtml">Department of City Planning</a>.
+ John Weir maintains a pretty comprehensive list of <a href="https://github.com/jweir/nyc-gov-data/blob/master/data/nyc_data_sets.markdown">NYC geographic data sets</a>, and if you learn a little git, you can contribute to it!
+ <a href=" http://geocommons.com/">GeoCommons</a> is a great resource for national and international map files.

<a href="http://www.webmonkey.com/2010/02/html_cheatsheet/">HTML</a> shouldn't be a new word, but you'll use hypertext markup language to organize and style your map infoboxes, so a <a href="http://www.simplehtmlguide.com/cheatsheet.php">cheatsheet</a> might come in handy.

**Get a Little Fancy**
<a href="http://colorbrewer2.org/">Color Brewer</a> is an indispensible resource for finding good gradients and color palettes so you don't have to become an expert on color theory, color blindness, hue and saturation.

You can use more than the ten map markers that Google Maps offers. <a href="http://journalists.org/2012/03/29/expanding-the-map-markers-in-google-fusion-tables/">ONA's MJ Bear Fellow Lucas Timmons has instructions for you</a>.

Google Maps won't let you layer points over polygons by default, but you can do it with <a href="http://fusion-tables-api-samples.googlecode.com/svn/trunk/FusionTablesLayerWizard/src/index.html">Fusion Tables Layer Wizard</a>. Russell walks through the steps he took to create <a href="http://datadrivenjournalism.2012.journalism.cuny.edu/new-york-public-school-ell/"> a map of public schools in NYC</a>.

Last Spring, Martin Burch mapped out <a href="http://datajournalism.2012.journalism.cuny.edu/2012/04/22/yellow-tag-sale-best-buy-to-close-50-stores/">Best Buy's spring sweep of store closures</a> using a <a href="http://michelleminkoff.com/2011/08/21/how-to-combine-multiple-fusion-tables-into-one-map/">guide</a> that the AP's <a href="http://michelleminkoff.com/">Michelle Minkoff</a> put together. 


<a href="http://cartodb.com/">CartoDB</a> is new and more powerful and flexible than Google Maps. It is also more complex. They regularly <a href="http://blog.cartodb.com/post/30997218852/a-round-up-of-maps-build-by-cartodb-users">round up maps</a> their users have made. Most of the examples there involve some substantial programming, however.

<a href="http://mapbox.com/">MapBox</a> is even more powerful, flexible, and complex.

**For the Programmers**

<a href="http://www.qgis.org/">Quantum GIS</a> is free and open source software that will let you do sophisticated geographic analysis. 

<a href="http://en.wikipedia.org/wiki/Git_%28software%29">Git</a> isn't particular to map making at all, but it is a distributed version control system, and a great way to collaborate on software development. <a href="http://repo.or.cz/">Repo.or.cz</a>, <a href="https://github.com/">GitHub</a> and <a href="http://gitorious.com/">Gitorious</a> are all great places to can get free git hosting.

<a href="https://github.com/albertsun/gmap-features">Albert Sun's gmap library</a> is an excellent resource.

If you start developing your programming skills, you can do a whole lot more using tools like <a href="http://mapbox.com/tilemill/">TileMill</a>, which is quite powerful, but takes a bit of technical know-how. The news apps team at ProPublica <a href="http://www.propublica.org/nerds/item/introducing-simple-tiles-our-new-mapping-library">built their own mapping library</a>, <a href="http://propublica.github.com/simple-tiles/">published the code</a>, and used it to power a very cool <a href="http://projects.propublica.org/redistricting-maps/mcnerney">redistricting explorer</a>.

**Think Things Through**
Clay Shirky wrote a <a href="http://jour72312.tumblr.com/post/44547848210">great review</a> of Homicide Watch D.C. and Washington Post's Homicides in the District, two projects that look at murders in Washington D.C. through very different lenses. One starts with a map, one with photos. This is one great place to start thinking about what it means to map information and what story you're telling when you do that.

In class we talked a lot about gun data, which has been in the news. <a href="http://www.lohud.com/interactive/article/20121223/NEWS01/121221011/Map-Where-gun-permits-your-neighborhood-">*The Journal News* posted the addresses</a> of every gun permit holder in Westchester
+ <a href="http://www.thenewyorkworld.com/2013/01/15/gun-data/">*The New York World* took that data and organized it</a> into zip codes by density. And some very smart journalists weighed in on the Journal News' decision, including <a href="http://www.cjr.org/behind_the_news/susan_mcgregor_on_gun_permit_d.php?page=all">Susan McGregor in CJR</a>, <a href="http://www.nytimes.com/2013/01/14/business/media/guns-maps-and-disturbing-data.html?_r=3&amp;">David Carr in NY Times</a> and <a href="http://buzzmachine.com/2013/01/14/public-is-public-except-in-journalism/">Jeff Jarvis on his blog</a>

Other mapping projects we looked at:
+ <a href="http://project.wnyc.org/elections/mayor-tracker/index.html">WNYC's mayoral race tracker</a>
+ <a href="http://usatoday30.usatoday.com/news/nation/story/2012-04-05/sprawl-census-urban/54007292/1">USA Today's sprawl slider</a> uses <a href="http://www.catchmyfame.com/catchmyfame-jquery-plugins/jquery-beforeafter-plugin/">Before/After</a> to facilitate comparison between two maps.

**More tools? More questions?**
Lingering questions? Want to share a tool you love (or just kind of like)? Bonus points if they're <a href="http://www.fsf.org/">free (as in birds)</a>.
