#Examples:

[Wall Street Journal on Medicare Billing](http://projects.wsj.com/medicarebilling/)

St Louis Police lost a whole lot of video evidence. [Story](http://www.komonews.com/news/local/130209878.html#list)   

Vivelohoy has been working on an expansive series about changing demographics in Urbana-Champagne. [Story](http://www.vivelohoy.com/noticias/8121347/arrest-disparities-for-black-people-in-champaign-urbana)   

Pulitzer Prize Finalists http://www.startribune.com/local/173885931.html  

ProPublic does [lots of showing their work](http://projects.propublica.org/tools) sometimes with a [document collection](http://www.propublica.org/special/special-government-employees-lists)   

 
## Beyond Datatables
The very easiest: Google includes a "table" format in their embeddable charts.

If you want to get fancy, ProPublica and the LA Times have really nice command line tools. I'm a Python fan because I'm not cool, so I like TableStacker, but the differences are trivial. 

[Tablestacker](https://github.com/datadesk/latimes-table-stacker) | [Demos](http://table-stacker.s3-website-us-west-1.amazonaws.com/)

[Tablesetter](http://propublica.github.io/table-setter/) | [Demo](http://projects.propublica.org/tables/failed-banks) (also [stimulus spending](http://projects.propublica.org/tables/stimulus-spending-progress))

And then, in the "just right" categoy, we have [Datatables](http://www.datatables.net/index)

## Hands On
This 2011 Streetsblog story on car ownership links to the data they started from.
<http://www.streetsblog.org/2011/04/06/new-yorks-car-ownership-rate-is-on-the-rise/>

Let's do that one better. I took their spreadsheet, which actually included a lot of tabs and whatnot, and moved it to a single csv that we can use:
<http://www.streetsblog.org/2011/04/06/new-yorks-car-ownership-rate-is-on-the-rise/>

+ Fix the column heading (It is 2005-09)

The [same rules of design apply](http://darkhorseanalytics.com/blog/clear-off-the-table/).