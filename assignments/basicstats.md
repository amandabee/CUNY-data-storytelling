If you can't tell the difference between the mean and the median with 100% assurance, [Robert Niles is your friend][1]. His "[Statistics Every Writer Should Know][1]" is just that. There are plenty of resources to bring your math and statistics up to speed, though:

*   Really [basic newsroom math][2] (from ASU Cronkite Professor Steve Doig),
*   Sarah Cohen's [Numbers in the Newsroom][3] (which [IRE sells][4]) should be in our library and is excellent. 
*   [Statistics Hell][5] is bizarre and unnerving, but includes tons of handouts and lessons on statistical methods. If animated gifs of flame engulfed brains aren’t your thing, maybe look elsewhere.

## The Typical Player

The *mean* or average, is sum of all values in a set, divided by the number of values. The *median* is the middle value. In any set of numbers, half are greater than the median and half are less.

> The median MLB salary in 2013 is 1.2 million but the mean salary is somewhere over 3.5 million dollars. Why?

Close to 60% of all players make less than $2 million but a smattering make ten times that or more. That distorts the average. The median is much closer to what the "typical player" earns.

> The median player age is 27. The mean is 28 -- they're a whole lot closer. Why is that?

The range of ages is small (19-42) and there are only a handful of young players and only a handful of older players.

## Normalization

We looked at *data normalization* -- manipulating numbers to compare apples to apples. Sarah Cohen the following example:

    **City**    |  **Total Crimes** | **Population**
    Pittsburg   |  80,000           |  2.5 million
    Tucson      |  70,000           |  700 thousand
    

To compare crime rates in those two cities, we first need them to have a common denominator. 100,000 is typically used to talk about crime rates, so we divide the number of total crimes by the population to get a crimes per capita figure, and then we multiply that by 100,000 to get a crime rate:

     **City**    |  **Total Crimes** | **Population** | **Per Capita**  | **Rate per 100,000**
     Pittsburg   |  80,000           |  2.5 million   |  0.32           |  3200
     Tucson      |  70,000           |  700 thousand  |  0.8571         |  8571
    

That gives us numbers we can compare: `8571/3200 = 2.7` so we can say that the crime rate in Tuscon is more than 2 and a half times that of Pittsburg.

I didn't check those numbers, though, and Sarah's book was written in 2001, so they could probably use updating.

## Percent Change

We calculate *percent change* by subtracting the old value from the new value and dividing the result by the old value: `(new - old)/old`. Last week we had 15 students, but Erin just registered.

> `(16-15)/15` = .07 so our class grew by 7%.

*Gothamist* [cited][6] some figures about traffic saftey in a story on speed cameras.

> there's a 70% chance a child will be killed if struck by a vehicle moving at 40 mph, and an 80% chance the child will survive if struck by a car traveling at 30 mph

It's true for adults, too. That's is why the [speed limit in New York City][7] is 30 mph! If we wanted to talk about these numbers in other terms, we'd first need to normalize them:

     **Speed**    |  **Death Rate** | **Survival Rate**
      30 mph      |  *20%*          |  80%
      40 mph      |  70%            |  *30%*
    

Then we can make some statements about the numbers. "As likely" uses a ratio: a child is 3.5 times as likely to die when she is struck by a car moving 40 mph. But "More likely" uses the percent change formula: a child is 2.5 times more likely to die when struck by a car moving 40 mph. Or, at 30 mph increasing your speed by 10mph makes you 2.5 times more likely to kill someone (or 3.5 times as likely to kill someone.) This concept is called "relative risk."

> "as likely" is a ratio -- a direct comparison "more likely than" is a change -- use percent change

Gothamist also said that there were 274 pedestrian fatalities and 414 recorded murders in NYC in 2012. That means you're 1.5 times as likely to be murdered or 50% more likely to be murdered.

A few more examples: women who don't exercise are [25 percent more likely to develop breast cancer than women who do exercise.][8], so inactive women have a 25 percent higher risk of breast cancer than active women, or women who don't excerise are 1.25 times as likely to develop breast cancer. [Smokers who use the patch][9] are twice as likely to quite smoking. And using the patch increases the odds that you'll actually quit by 100%. And you really should quit: [smokers are 20 times as likely to develop lung cancer][10].

Bonus: according to the Washington Post, [you’re 4,706 times more likely to drink yourself to death than die from terrorism][11]. Check their math!

# More Resources

## Classes

*   [open courses at Carnegie Mellon][12]

*   [Probabilistic Graphical Models][13] (at Stanford)

## Books

*   [Head First Statistics][14] is supposed to be a good way to get started. There’s a Data Analysis book in the series, too.

*   Windows users might like [R through Excel][15].

*   Think Stats ([html][16], [bound][17])

## Advanced Software

*   [R][18] is a statistical computation language. Take a look at their [Documentation][19] and [Contributed Documentation][20]

 [1]: http://www.robertniles.com/stats/
 [2]: http://forjournalists.com/cookbook/index.php?title=Math_cribsheet
 [3]: http://www.worldcat.org/oclc/48822382
 [4]: http://www.ire.org/resource-center/books/
 [5]: http://www.statisticshell.com/html/apf.html
 [6]: http://gothamist.com/2013/08/26/speed_cameras_go_up_in_school_zones.php
 [7]: http://www.nyc.gov/html/dot/html/motorist/knowthespeedlimit.shtml
 [8]: http://ww5.komen.org/BreastCancer/UnderstandingRisk.html
 [9]: https://onlinecourses.science.psu.edu/stat100/node/33
 [10]: http://en.wikipedia.org/wiki/Relative_risk
 [11]: http://www.washingtonsblog.com/2013/04/statistics-you-are-not-going-to-be-killed-by-terrorists.html
 [12]: http://oli.web.cmu.edu/openlearning/forstudents/freecourses/statistics
 [13]: http://www.pgm-class.org/
 [14]: http://www.worldcat.org/oclc/213307384
 [15]: http://www.worldcat.org/oclc/382399648
 [16]: http://greenteapress.com/thinkstats/html/index.html
 [17]: http://www.worldcat.org/oclc/727703593oclc
 [18]: http://www.r-project.org/
 [19]: http://www.r-project.org/other-docs.html
 [20]: http://cran.r-project.org/other-docs.html
