Someone on my neighborhood discussion list (acutally...the editor of Saveur. I'm not sure why she uses her work signature on list messages but she hasn't impressed me, in general) insisted that calling animal control about a roaming peacock would result in its being euthanized.

> Animal control doesn't shoot; it euthanizes

I'm pretty sure that's just not true, not least because I adopted this damn feral puppy that won't go for a walk. I did a bit of googling but couldn't quite figure out who you're calling if you call "animal control." -- technically Animal Care and Control is an independent non-profit. 

So I downloaded the 311 call data and started just digging around.

Note: tab completion is your friend! So is RStudio. 

We call this: `<-` gets. So my first step is to load the call data into a dataframe. 

I tried to start with `311 <- read...` but I got a weird error about "left-hand side assignment." Which actually makes perfect sense. Do `311 + 1` -- 311 already has a value in R. 

## Another Script
[New Orleans 911 Data](https://gist.github.com/amandabee/8514c262734b3241da73)

## Vectors, Data Frames, Factors
These are complex. Loosely, you can think of a data frame as "table-like" though R also uses tables, which are equally table like. 

A "vector" is a list, really. A "factor" is 

## apply ?? plyr ?? Huh?
R's `apply` functions are a total brain bender. The [best explanation out there](http://stackoverflow.com/questions/3505701/r-grouping-functions-sapply-vs-lapply-vs-apply-vs-tapply-vs-by-vs-aggrega/7141669#7141669) won't make any sense the first few times you read it. That's okay. There's a reason we don't just teach everyone R in the first week of Fundamentals. 

R is free and open source software. It's a language, not unlike Python in many ways. People write libraries for it. The libraries are free, too. So there is some overlap. `plyr` does a lot of what we want.   

## If you want to do this
Here's my recommendation if you want to get to know R: start using it. Use it for things you could do in Excel. Then do them in Excel so you know you're not crazy. I did much of the analysis of the [Philadelphia court debts](http://www.marketplace.org/topics/wealth-poverty/philadelphia-collects-court-debt-decades-later) with *R in a Nutshell* in one hand. I had two months to prep the data, so I knew I had time to really adjust to this new tool. 

Get your hands on a reference book. [O'Reilly publishes a few](http://search.oreilly.com/?q=R&x=0&y=0). Try some of [Nathan Yau's Tutorials](http://flowingdata.com/) -- I paid for a year membership when I was first learning. 

