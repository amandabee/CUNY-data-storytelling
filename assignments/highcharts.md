Charting tools like Highcharts give you a great deal more control over your final product than Google Spreadsheets can. For some of you they're way more fun. For some of you they're way more exasperating. For a lot of you, Highcharts is probably somewhere in between.

If you want to take another stab at the exercise we worked through in class, <!--more--> you should.

Start by registering with <a href="http://jsfiddle.net/">JS Fiddle</a> and logging in, so you can save your work.

**Step One: get organized**. You're going to need a few windows open. You might want to close other windows so you can focus.
<ul>
	<li>the <a href="http://www.highcharts.com/demo/">Highcharts Demo</a> page in a browser (we'll start with a basic line chart)</li>
	<li>our <a href="http://datadrivenjournalism.2013.journalism.cuny.edu/scripts/loadCDN.php?img=614/files/2013/04/sampledata.csv">sample data on Bronx graduation rates</a> in a text editor or spreadsheet program</li>
	<li>your text editor (if you don't have one, try <a href="http://www.sublimetext.com/">Sublime</a> or <a href="http://www.barebones.com/products/TextWrangler/">Text Wrangler</a>, or if you're feeling fancy and want free and open source software, try <a href="http://emacsformacosx.com/">Emacs</a> or <a href="http://macvim.org/OSX/index.php">Vim</a>)</li>
	<li><a href="http://shancarter.com/data_converter/">Mr Data Converter</a> in a browser</li>
</ul>
**Step two: get started**. Open the demo in JS Fiddle (there's a button: "Edit in JS Fiddle"), and copy your data from the CSV to Mr Data Converter. Play around with the output options and see if you can make sense of the results. Look at the three JSON options. Can you see how they differ? Do you understand how Mr Data Converter is re-organizing the data you entered? When you're done exploring, you should choose "JSON - Column Arrays" -- copy the output and paste it into a blank page in your text editor.

**Step three: make your first edit**. The title of the demo chart is "Monthly Average Temperature" but our numbers are about graduation rates in the Bronx. Find the title option and edit it. JS Fiddle does a nice job of color coding the code so you can see that the apostrophes are important to the structure of the JavaScript. Use the "Run" button to test your change. If JS Fiddle redraws the chart with new title, go ahead and save your work and keep going. If the chart pane is blank, your script is broken. Look at what you just changed -- every apostrophe, comma, square bracket and curly brace matters so make sure you didn't add an extra apostrophe or remove a comma. Keep using "Run" to test your changes.

**Step four: keep tweaking**. Start walking through the settings and making changes. After every change (every single one. Trust me.) test your work by running it and save (or "Update) your work only if the changes worked. That way you can go back to a known working copy if you screw something up.

Update the xAxis categories by copying the data from the "Cohort" array that Mr. Data Converter generated (again, this is a lot easier to do if you copy the JSON into a text editor before you start copying and pasting).

We changed the tooltip value suffix to "%" -- you can do that as you walk through the settings or wait until you've got the data in place and can see with your own eyes how silly the initial value suffix looks.

Remember your workflow: Change one setting, run, update only if the change worked.

Replace the world temperature data with graduation rates. You'll only have series (graduated and dropped out) while the demo had four. You're going to need to remove two series, so take a moment to make sure you understand where each series starts and ends and how they're delimited. JS Fiddle can really help with this! Try putting your cursor right next to a curly brace or square bracket. It should turn bright green and somewhere on the page, a matching brace should also turn bright green. Those braces are a pair. One opens, the other closes. If your brace turns red, you need to start tracing your work to figure out where you've got a missing brace or bracket.

Remember your workflow: Change one setting, run, update only if the change worked.

Tip: usually, a comma separates two items in a series, so you don't want a comma after the last item.

**Step five: get fancy**. Take a look at the <a href="http://api.highcharts.com/highcharts">Highcharts reference</a> and find the line <a href="http://api.highcharts.com/highcharts#plotOptions.line.marker">marker</a> option under <a href="http://api.highcharts.com/highcharts#plotOptions">Plot Options</a>. Read the documentation. Don't skim it, read it. Think about what it is saying. And then look at their <a href="http://jsfiddle.net/gh/get/jquery/1.7.2/highslide-software/highcharts.com/tree/master/samples/highcharts/plotoptions/series-marker-enabled/">marker demo</a>. What's a "line marker"? Can you tweak your graduation rate chart so it doesn't use line markers?

**Step six: get really fancy**. Start digging around in the demos and in the API reference. See if you can draw a plot band or move your legend or make the chart look the way you want it to look. 

Remember your workflow: Change one setting, run, update only if the change worked.

If you get stuck, leave a comment here. Give us all the URL of the last good working copy (the one you saved) and a new fiddle URL that shows the version that didn't work out so well. Tell us what you were trying to accomplish. 

<h2>Good questions</h2>
**Is Highcharts free? **It is available free of charge <a href="http://shop.highsoft.com/faq#what-is-non-commercial">under some circumstances</a>, but it isn't <a href="http://www.gnu.org/philosophy/free-sw.html">free</a> and <a href="http://opensource.org/osd-annotated">open source</a> software. If you develop a Highcharts based chart for a site that is commercial and doesn't already have a Highcharts license, they will have to <a href="http://shop.highsoft.com/highcharts.html">purchase a license</a>.

**How do I embed this on my story?** We'll walk through this in class next week. If you want to use a Highchart for your current story and I didn't already show you how to embed it, let me know and I'll give you a clunky workaround until next week.

