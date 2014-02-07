Spreadsheets are Handy, but pivot tables are incredibly useful. 

##Wells by County

The Department of Environmental Conservation publishes [data on gas wells](http://www.dec.ny.gov/energy/1603.html) in New York State. Download it: How many wells are there per county? 

1. Start with `Data > Pivot Table Report` -- look at the cells Excel proposes to use. Does that include all of your data?
2. Add Row -- Use "COUNTY" for the rows. You should see a list of county names. 
3. Add Value -- Use "API_WELLNO" for now. 
4. Check the formula -- should excel `count` values or `sum` them? Or find an `average`? 

And there you have it. More things to play with:

* Try adding "SLANT" as a Column -- horizontal (as opposed to vertical) wells are particularly controversial. Are there any concentrations of horizontal wells?
* How would you work out how much money each county is collecting in permit fees?
* Can you see any trends in the average permit fee in each county? 

##Coalition Casualties

Last semester, Matt Surrusco found [iCasualties.org](http://icasualties.org/OEF/Index.aspx) -- NYT has a nice [profile of Michael White](http://www.nytimes.com/2010/11/22/business/media/22link.html) who trolls through news sites and official releases to build out a database of coalition forces deaths. Start with <http://icasualties.org/OEF/OEF_US_Fatalities.xls> and pivot by "Country of Death" and "Place of Death." 

This data needs some cleanup -- we'll work on that next week.

We used a function: `=YEAR()` to find the year of each death. We also had to do `format > cells …` and select `general` to correct wonky display issues. If you right-click in your pivot table, you'll see a "Refresh Data" option -- you might need that if your year column is not showing up. 

Some questions you could answer:

1. What’s the most common age of death
2. How many deaths, and at what age?
3. What’s the most common age of death for members of the CIA? the Army?
4. What rank and branch had the greatest number of casualties?
