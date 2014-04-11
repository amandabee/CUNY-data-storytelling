#Examples:

[Wall Street Journal on Medicare Billing](http://projects.wsj.com/medicarebilling/)
St Louis Police lost a whole lot of video evidence. [Story](http://www.komonews.com/news/local/130209878.html#list)   

Vivelohoy has been working on an expansive series about changing demographics in Urbana-Champagne. [Story](http://www.vivelohoy.com/noticias/8121347/arrest-disparities-for-black-people-in-champaign-urbana)   

Pulitzer Prize Finalists http://www.startribune.com/local/173885931.html  

ProPublic does [lots of showing their work](http://projects.propublica.org/tools) sometimes with a [document collection](http://www.propublica.org/special/special-government-employees-lists)   

## Hands on TK
This 2011 Streetsblog story on car ownership links to the data they started from.
http://www.streetsblog.org/2011/04/06/new-yorks-car-ownership-rate-is-on-the-rise/

Let's do that one better. I took their spreadsheet, which actually included a lot of tabs and whatnot, and moved it to a single csv that we can use. 

##Datatables

[Freedive](http://multimedia.journalism.berkeley.edu/tools/freedive/) was promising but it seems to have more or less choked. 

The very easiest: Google includes a "table" format in their embeddable charts.

If you want to get fancy, ProPublica and the LA Times have really nice command line tools. I'm a Python fan because I'm not cool, so I like TableStacker, but the differences are trivial. 

[Tablestacker](https://github.com/datadesk/latimes-table-stacker) | [Demos](http://table-stacker.s3-website-us-west-1.amazonaws.com/)

[Tablesetter](http://propublica.github.io/table-setter/) | [Demo](http://projects.propublica.org/tables/failed-banks) also [stimulus spending](http://projects.propublica.org/tables/stimulus-spending-progress)


And then, in the "just right" categoy, we have [Datatables](http://www.datatables.net/index)

Datatables (JS library)
            http://datadrivenjournalism.2013.journalism.cuny.edu/2013/05/22/smokers-need-not-apply-guia-and-heather-revised/





Google spreadsheets->interactive chart->WP   

CSV->HTML->jQuery DataTables (http://www.datatables.net/index)   

Example dataset: https://docs.google.com/spreadsheet/ccc?key=0AkQfGqQEgO0gdHBfT1g0N1hRaE1EZE5HRGZqb0NKUnc&usp=sharing or https://docs.google.com/spreadsheet/ccc?key=0AqaPuVjW5_0OdElLZ0ZCZTBCdjdXQlJDNFJNUER2Y2c&usp=sharing 

Link to jQuery library and DataTables library via CDN

            <script src="http://ajax.aspnetcdn.com/ajax/jquery/jquery-1.9.0.js"></script>   

            <script src="http://ajax.aspnetcdn.com/ajax/jquery.dataTables/1.9.4/jquery.dataTables.js"></script>  

Link to CSS

            <link rel="stylesheet" type="text/css" href="http://www.datatables.net/media/blog/beautiful_tables/complete.css">

Initialize datatable, simple no frills

            <script type="text/javascript" charset="utf-8">
                        $(document).ready(function() {
                            $('#example').dataTable();
                        } );
            </script>

Provide `<table>` with id to initialize and class for styling

            <table id="example" class="pretty">
                        <thead>
                        <th>Col</th>
                        <th>col</th>
                        </thead>
                        <tbody>
                        </tbody>
            </table>

Use Mr Data Converter to convert a csv into an HTML table.             
