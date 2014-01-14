#Examples:
St Louis Police lost a whole lot of video evidence. [Story](http://www.komonews.com/news/local/130209878.html#list)   

Vivelohoy has been working on an expansive series about changing demographics in Urbana-Champagne. [Story](http://www.vivelohoy.com/noticias/8121347/arrest-disparities-for-black-people-in-champaign-urbana)   

Pulitzer Prize Finalists http://www.startribune.com/local/173885931.html  

ProPublic does [lots of showing their work](http://projects.propublica.org/tools) sometimes with a [document collection](http://www.propublica.org/special/special-government-employees-lists)   

#Tools for this: 

Google Spreadsheets ("table" as a chart type) or 

Datatables (JS library)
            http://datadrivenjournalism.2013.journalism.cuny.edu/2013/05/22/smokers-need-not-apply-guia-and-heather-revised/


~~[Free Dive](http://multimedia.journalism.berkeley.edu/tools/freedive/example)~~ (buggy lately)

If you're a programmer, you can use the LA Times django [table stacker](https://github.com/datadesk/latimes-table-stacker/) to do [something like this](http://table-stacker.s3-website-us-west-1.amazonaws.com/). Or if Rails is your thing, [ProPublica's Table Setter](http://propublica.github.io/table-setter/) is great. They use it to track [stimulus spending](http://projects.propublica.org/tables/stimulus-spending-progress)


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
