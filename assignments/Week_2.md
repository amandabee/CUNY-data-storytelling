# Homework Week 2 (Due Feb 14)
Pitches for your first story are due next week, and you have two spreadsheet exercises to power through. And everyone needs to sign up for a [Festival of Data](https://www.ethersheet.org/s/festivalofdata) slot. 

You have two assignments: we want you to answer a handful of specific questions using [data that Slate published][1] alongside [How Many People Have Been Killed by Guns Since Newtown?][2] and I want you to download the CDC's data on firearm deaths and find something of your own in that data.  <!--more-->


## Pitches
Post pitches for your first team story on the blog in the "Pitches" category. 

A complete pitch should tell us who cares, why we care now, and what pre-reporting you’ve done. You must include...  
+ a proposed title or headline  
+ a story slug -- up to three words that capture the essence of your story
+ a list of the story's key elements  
+ a news hook, or explanation of why this story matters now  
+ a description of and link to the data (which means you have to find your data!)  
+ one source you have already spoken with or at least three potential expert sources and your plans for reaching them


## Spreadsheet Homework

**Part 1:** Slate spent one year maintaining a list of people killed by guns since the shootings in Newtown, CT just weeks before Christmas 2012. [Download that data](http://slate-interactives-prod.elasticbeanstalk.com/gun-deaths/getCSV.php) and use pivot tables and/or spreadsheet formulas to answer the following questions:

1.  What is the most common victim age?
2.  How many people of that age were killed by a firearm?
3.  What's the average age of a US shooting victim since December 2012?
4.  Which state had the highest number of shooting victims?
5.  In the state you found for #4, how much more likely are males to die by firearm than females (at least as far as this data is concerned -- you can express this as a percent *Men are 200% more likely to die by firearm than women* or as a multiplier *three times as many men…*)
5.  Which state had the highest number of female shooting victims?

**Part two:** The National Center for Injury Prevention and Control at the Centers for Disease Control maintains a [database of fatal injuries][5] in the U.S. Search [their database][6] by the following criteria:

*   Manner: Violence Related
*   Cause or Mechanism: Firearm
*   *Census Region: United States (default)*
*   *Race: All Races (default)*
*   *Sex: Both Sexes (default)*
*   Years: 2010-2010
*   *Hispanic Origin: All (default)*
*   *Ouptut: Standard Output (default)*
*   *All Ages (default)*
*   *Use 2000 as the Standard Year (default)*
*   Output Groups: 
    1.  Age
    2.  Race
    3.  Sex
      
You'll find a link to "Download Results in a Spreadsheet (CSV) File" at the bottom of the page. Explore the data, try some pivot tables in this data, or tweak the "Manner" to limit your results to Suicides or Homicides or … how do you think accidents are filed here? 

Write 50-100 words in the form of a nutgraf or a pitch to an editor who doesn't already know that you're a great writer describing some findings that warrant further reporting. Don't over think it too much, but don't forget to look up some population numbers so you're not comparing apples and oranges. Something along these lines is fine:

> California might be the most populous state, but West Virginia leads the way in gun homicides. … gun deaths in West Virginia made the news last year, compared to … in California. Teenage boys were most vulnerable -- nationwide … boys between x and y were killed by guns. 


## Install Refine and Filezilla

If you haven't already done so, you should also download and install [Refine][7] and [Filezilla][8] (even if you already have an FTP client that you like). If you get an error like "Refine is damaged and can't be opened. You should move it to the Trash," [the solution](https://github.com/OpenRefine/OpenRefine/issues/590) to is not at all intuitive: You have to Change your Privacy and Security settings to allow applications downloaded from "Anywhere" -- it's on the "general" tab. 

## Festival of Data
[Sign up for a Festival of Data slot](https://www.ethersheet.org/s/festivalofdata).

  [1]: http://slate-interactives-prod.elasticbeanstalk.com/gun-deaths/getCSV.php
  [2]: http://www.slate.com/articles/news_and_politics/crime/2012/12/gun_death_tally_every_american_gun_death_since_newtown_sandy_hook_shooting.html?wpisrc=newsletter_jcr%3Acontent
  [5]: http://webappa.cdc.gov/sasweb/ncipc/mortrate10_us.html
  [6]: http://webappa.cdc.gov/sasweb/ncipc/mortrate10_us.html
  [7]: https://github.com/OpenRefine
  [8]: https://filezilla-project.org/
