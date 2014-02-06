#Basic statistics, Understanding numbers
### Zero floor
There are some people who will tell you it is dishonest to start your Y-Axis anywhere but zero. Sometimes that makes no sense -- the NASDAQ is never going to be zero (or maybe it is, but that's a different conversation). If your floor is higher (or lower) than zero, you need a reason. A compelling one that makes sense.


### False Precision

Importance of rounding off.


### Writing Summaries

Starting with the basics. Most of you should know this already.

What is the mean?

> The sum of all values, divided by the number of values.

What is the median?

> The value that half are over and half are under.

The median MLB salary is 1.2 million but the mean salary is somewhere over 3.5 million dollars. Why are they so far apart?

> Something like 60% of all players make less than $2 million but a smattering make ten times that or more. That distorts the average.

The median player age is 27. The mean is 29.93 -- they're a whole lot closer. Why is that?

> The range is pretty small (19-42) and there are only a handful of young players and only a handful of older players -- the histogram would follow a sort of bell curve.

### Writing Comparisons

Welcome Erin.
Last week, we had 15 students. This week we have sixteen. If I wanted to describe the change in the class size, what are my options?

> 1/15 is .07, so there are 7% more students today. I can do a little sanity check on that: if we'd added one student to a class of 10, I know that is 10%. 15 is larger than 10 so one student has a smaller impact.

> We can use the % change formula to figure this out, too:
> (new - old)/old or  (16-15)/15 
> a difference of 1.

#### From Sarah Cohen's book

If Pittsburg saw 80,000 crimes (in a population of 2.5 million) and there were 60,000 crimes in Tucson, pop. 700,000 ... how do we compare these numbers?

> We want to know the crime rate per 100,000 residents.
> Tucson = 86, Pittsburg = 32.
> 86/32 = 2.7 -- you can say that the crime rate in Tuscon is more than 2.5 times that of Pittsburg.

I didn't fact check these numbers. If someone wants to look them up, that'd be great.

#### More complex comparisons

##### From *Gothamist*, [Speed Cameras Go Up In School Zones, DOT Poised To Issue Warnings](http://gothamist.com/2013/08/26/speed_cameras_go_up_in_school_zones.php)

* there's a 70% chance a child will be killed if struck by a vehicle moving at 40 mph, and an 80% chance the child will survive if struck by a car traveling at 30 mph

How do we transform that into "more likely than" statement?

"as likely" is a ratio -- a direct comparison
"more likely than" is a change -- use percent change

0.80 / 0.70 = 1.14 

So a child struck by a 40mph vehicle is 1.14 times as likely to die as a child struck by a 30 mph vehicle.  That isn't a very compelling statement and it doesn't make a lot of sense, which is why Gothamist chose to use the figures. (This is "relative risk")

(0.80-0.70)/0.70 = 0.14 

So a child is 14% more likely to die at 40 mph.

* There were 274 pedestrian fatalities and 414 recorded murders in NYC in 2012 

Let's make some "as likely as" / "more likely than" statements.

1.510948905    as likely to be murdered
    
0.510948905    more likely to be murdered


##### Stop and Frisk
The ACLU Aggregates some [statistics about Stop and Frisk in New York City](http://www.nyclu.org/content/stop-and-frisk-data)

In 2012, New Yorkers were stopped by the police 532,911 times
473,644 were totally innocent (89 percent).
284,229 were black (55 percent).
165,140 were Latino (32 percent).
50,366 were white (10 percent).

To make valid comparisons, what do we need to know? Is a black New Yorker five times as likely to be stopped?

No. We can say that more than five times as many blacks are stopped and frisked, but to talk about likelihood, we need to know how *likely* a black New Yorkers is to be stopped, vs how likely a white New Yorker is.

According to [Wikipedia] (http://en.wikipedia.org/wiki/Demographics_of_New_York_City#Demographic_profile), which is a fine place to start (you'd want to go back to the American Community Survey to get good numbers) :

Total population |        	|    8,175,133 
White        	|    44.60% |    3646109.318 
Black        	|     25.10% |    2051958.383 
Hispanic     	|    27.50% |    2248161.575 
Asian        	|    11.80% |    964665.694 
 	 
Note: this is a fine time to talk about false precision. The census talks about whole numbers. There are probably ten more decimal places in each population percentage that would give us the *actual* number of Asian New Yorkers, which is probably not 964,666 and is definitely not 964,665.694 


Reporting on this:
http://www.nytimes.com/2010/05/13/nyregion/13frisk.html

#### Algebra
When you get stuck, go back to basic algebra. Convert things into X and Y. If I am twice as old as you, let x = my age and y = your age. So now we can express this as an equation:

> x = 2y

And we can manipulate that equation:

> x/y = 2 
> x/x = 2(y/x) so 1 = 2(y/x) so 1/2 = x/y

