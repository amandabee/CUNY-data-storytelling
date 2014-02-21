# Homework Week 4 (Due Feb 28)
This week you're going to sketch out storyboards, update your pitches to reflect the work you've done with the data thus far, and dig into city graduation rate data. <!--more-->

## Storyboards
**Storyboards** We all drew storyboards in class today. Storyboards (or wireframes) are just a sketch of your planned project.  Don't go crazy getting the presentation perfect. If I can see that you're planning two bar charts organized by fruit and showing total sales in dollars, that's great. But do sketch out your whole story: how many charts are you planning? Is one a map? (It doesn't have to be.) Are you adding a photo?  And then for each chart or map, zoom me in: what are the values? How are they encoded? Where will different elements be positioned in your project? How a user will navigate through the content. Check out [Mark Luckie’s thoughts on sketching/storyboarding](http://www.mediabistro.com/10000words/the-importance-of-sketching-and-why-you-should-be-doing-it_b837), from 10,000 Words, for more context. 

When you sketch out your storyboard, you should also update your pitches to reflect the progress of your reporting. They should be fuller and more clear. 

Note: this is not what is on the syllabus. We did a bit of pivoting in class today. 

## HighCharts

I've posted a [HighCharts walkthrough](http://hickman.spring-2014.dataviz.journalism.cuny.edu/2014/02/21/highcharts/) and I encourage you to try your hand at making a second high chart following those instructions. The more you do this, the easier it gets. And remember: those `JS Hint` and `Tidy Up` buttons are your friends. 


**Charting**
Download NYC's [Graduation Outcomes](https://data.cityofnewyork.us/Education/Graduation-Outcomes-Borough-Classes-of-2005-2011-E/x2hp-8ukt) data from NYC Open Data. Use pivot tables, formulas and perhaps some filters to get to know the data.

Sketch out a series of graphs (or perhaps just one?) that illustrate graduation rate trends for Hispanics, Asains, Whites and Blacks in each borough in the years provided. To keep things simple, use "4 year June" numbers. 

Pick one of those graphs that you sketched and reproduce it in HighCharts. Add a title that makes sense, label your axes intelligibly and post the URL for your JSFiddle to the comments on the post. If you get stuck, don't hesitate to comment here: post a link to your JSFiddle and explain what the problem is. 

**Tips**   
+ Download the data from  NYC Open Data as a CSV. Don't use the Excel version. That's almost always good advice. In this case it will save you from a headache or three for sure.  
+ The "cohort categories" are cumulative. There were 638 Asian students in the Bronx 2001 cohort. 479 graduated within 4 years, 534 graduated within six. That means that 479 students walked in 2005, and another 55 finished in 2006 or 2007. Those 479 are included in the five year rate and in the six year rate.  That means that if I take the sum of all graduates for a given demographic/year/borough group, I'm going to count a lot of people three or four times. Don't do that. Either use a filter in your pivot table (No … we haven't actually done that, but you can watch it happen in an [awesome little movie](https://vimeo.com/87300699) if you want. ) or sort your data by "cohort category" and only pivot the data you are interested in.  
+ Paste-Special is your friend. You're going to have to do some math on the output of your pivot table. So copy the pivot table, open a new tab, and use `Edit > Paste Special` to paste the `values`.
+ We haven't talked about transposing, but just for kicks, copy a block of data and use `Edit > Paste Special` with `transpose` checked -- what did that do?  
+ Once you've got a mess of tabs open, make sure you're saving your document as *XLS* or *ODS* (for my LibreOffice folks) and not as a *CSV*
