# Open Refine
Install [OpenRefine](http://openrefine.org/). If you get an error like "… is damaged and can't be opened. You should move it to the Trash," [the solution](https://github.com/OpenRefine/OpenRefine/issues/590) to is not at all intuitive: You have to Change your Privacy and Security settings to allow applications downloaded from "Anywhere" -- it's on the "general" tab. 

## iCasualties

Last semester, Matt Surrusco found [iCasualties.org](http://icasualties.org/OEF/Index.aspx) -- NYT has a nice [profile of Michael White](http://www.nytimes.com/2010/11/22/business/media/22link.html) who trolls through news sites and official releases to build out a database of coalition forces deaths. He's not very systematic, however. So we can do some cleanup. 

Note that most pages on iCasualties are paginated, but the [by Nationality](http://icasualties.org/OEF/Nationality.aspx) page is not, or it is possible to [download xls files](http://icasualties.org/OEF/index.aspx) on Feb 13, 2014

For now, grab [my copies](https://github.com/amandabee/cunyjdata/tree/master/lecture%20notes/pivot%20and%20refine) if need be. Open this in Refine

## Campaign Contributions

[NYC Mayoral campaign contributions](http://www.nyccfb.info/searchabledb/) or 
[my copies](https://github.com/amandabee/cunyjdata/tree/master/lecture%20notes/pivot%20and%20refine) if there are download problems. You can do really interesting reporting with this stuff, eg. [Nick Wells’ story on campaign bundlers](http://datadrivenjournalism.2013.journalism.cuny.edu/2013/05/23/bundling-up-for-the-campaign-season-2/)

Choose 2013 Citywide elections and Bill deBlasio, candidate for Mayor; search; Download CSV file button and then in refine … 

1. Add Text facet, Cluster (occupation, city)
2. Add Numeric facet, what are negative contributions? -refunds, need to understand data or call up somebody, do reporting.
3. Add Timeline facet...NaN? what’s that?
4. Interested in ZIP codes...is that Numeric or Text facet? Why? Use facets for intersections between multiple categories.
4. Edit Cells > Common Transform > to date, to number, etc.
5. Edit Cells > Common Transform > to Title case (to get rid of UPPER CASES)
6. Edit Cells > Edit Column > split into several columns (to separate last name and first name)
7. Edit Cells > Transform (use value[0,4] to get first five digits of zip code)	How many lawyers made donations?
	What was the most common occupation for donors?
	Who was the most frequent donor from New Jersey? and how many times did s/he donate?
	What questions would you want to know?

9. Export > as CSV.

