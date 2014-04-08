#CSVkit

Pre-reading: [Installing CSVkit](http://hickman.spring-2014.dataviz.journalism.cuny.edu/2014/03/29/installing-csvkit/)  and [Command Line Basics](http://hickman.spring-2014.dataviz.journalism.cuny.edu/2014/03/31/command-line-basics/)

We used [CSVkit](http://csvkit.readthedocs.org/) to whittle NYC property records down to manageable pieces. Take another stab (and think about how this might help with, say, 311 call data. Or DOB records.

I want to walk through a chunk of data that I helped someone in Tim's class manipulate. 

## MapPLUTO

NYC's Department of City Planning publishes incredibly useful [property maps of NYC](http://www.nyc.gov/html/dcp/html/bytes/applbyte.shtml). Not for nothing, these are available on Socrata, but if you find them on NYC Open Data you're way (way) better off going back to the agency that provides the data. Among other things, City Planning provides clear context for their data.

Today the link for the most up to date MapPLUTO data is <http://www.nyc.gov/html/dcp/html/bytes/dwn_pluto_mappluto.shtml> but that may change. Download the CSV format. You'll see why in a moment.

## Getting unstuck
<kbd>control</kbd><kbd>c</kbd> is the "kill" command -- it will stop the current process. So if you lose your command prompt or you run something that is taking longer than it should, <kbd>control</kbd><kbd>c</kbd> will set you right. Keep in mind, however, that we chose the very smallest file to work on in class. The other four boroughs have more buildings, bigger data. 

## Getting Around
We all set up our computers so that we can open a terminal in any folder, just from the context (right click) menu, but you can also use `pwd` to see exactly where you are and `cd ...` to move up or down the folder tree. I recommend [Zed Shaw](http://cli.learncodethehardway.org/) if that's sticky.

We also played with tab completion, and used `*` as a wildcard. 

And, we used `du -h ./*` to check the sizes of our files. 

Use `wc` and `wc -l` to get wordcounts of a file.

## Using CSVkit

View column names with `csvcut -n MN.csv`

Search for a particular column by piping the output of that command to grep: `csvcut -n MN.csv | grep Own`

Find the column numbers for these columns:

+ LandUse
+ OwnerType
+ ZoneDist1-4
+ AssessTot
+ ExemptTot
+ Council
+ ZipCode
+ Address
+ CD
+ Lot
+ Block
+ XCoord
+ YCoord

Use `csvcut -c 2,3,4 MN.csv` to print columns 2, 3 and 4 to [stdout](http://en.wikipedia.org/wiki/Standard_streams). *Challenge yourself:* write the command to produce all of the columns we need. 

Use a `>` to redirect `csvcut`'s output from `stdout` to a new file:

 `csvcut -c 2,3,4 MN.csv > smaller_MN.csv`

Remember: that isn't a complete list of columns!

Use `csvgrep` to search for a specific value (11) in the land use column (in my example, it's column 12: 

`csvgrep -c 12 -m 11 smaller_MN.csv > vacant_MN.csv`


And then count the lines in your resulting file: `wc -l vacant_MN.csv`







