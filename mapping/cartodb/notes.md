templates:

* Copy "info\_window\_template.html" and "border-radius.htc" into your own working directory

* Edit the Title

* On lines 59-60 you can set the map variables, including the center point (hint: 42.8152, 73.9400 is the lat/long of central New York) and the zoom. The template has the zoom set to 7 -- try 3 and 8 to get a sense of what zoom levels mean.    

* On line 65, you can set the tile layer. If you don't want to keep the "toner" default, find your viz.json URL (see the next item), plug it into http://jsonlint.com/ and pull out the urlTemplate value.    

* Line 69, set your viz.json URL. This is the URL under "API" in the Share tab.   

* Line 73, you need to tell the JavaScript what columns you're going to use in your info windows. Keep "cartodb_id" and "geometry" though -- you need those to draw your map.   

* Line 48 is your infobox div. Once you've got the rest of your values set, you can edit the HTML to plug in fields from your CartoDB table.    

## Working with JSON

Bare viz.json files don't have a lot of formatting in a browser.
<http://cunydata.cartodb.com/api/v2/viz/c4566022-4713-11e3-a8e4-3085a9a9563c/viz.json>

You can use a browser extension or copy and paste it into JS Fiddle and use Tidy Up to make it readable. 
