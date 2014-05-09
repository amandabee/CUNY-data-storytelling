all.311 <- read.csv('Downloads/311_Service_Requests_from_2010_to_Present.csv')

## Use bracket syntax to subest the first 20 rows.
smaller.311 <- all_311[1:20,]

names(smaller.311)

tabulate(smaller_311)
sm.complaints.by.dept <-table(smaller.311$Agency)
sm.complaints.by.dept <- as.data.frame(sm.complaints.by.dept)
## You see something interesting here: smaller.311$Agency is a factor: all the values are there.

sm.complaint.type.by.dept <- as.data.frame(table(smaller.311$Agency,smaller.311$Complaint.Type))
## We're seeing some funkiness here as a result of the factors: it is processing each factor.
## I only want counts of the combinations that exist:

### I can use a subset
subset(sm.complaint.type.by.dept, Freq > 0)

## Or bracket syntax                    
sm.complaint.type.by.dept[sm.complaint.type.by.dept$Freq > 0, ]

## So now we can put this all together with teh big data set.
complaint.type.by.dept <- as.data.frame(table(all_311$Agency,all_311$Complaint.Type))
## So now we can put this all together with teh big data set.
complaint.type.by.dept <- complaint.type.by.dept[complaint.type.by.dept$Freq > 0, ]

## I can sort these now, with sort() look that up
## first line says what? So we need order()
order(complaint.type.by.dept$Freq)

## More details

summary(complaint.type.by.dept$Freq)
complaint.type.by.dept[complaint.type.by.dept$Freq > 20000, ]

subset(complaint.type.by.dept, grepl("animal",complaint.type.by.dept$Var2, ignore.case=TRUE))



subset(complaint.type.by.dept, grepl("cat",complaint.type.by.dept$Var2, ignore.case=TRUE))
subset(complaint.type.by.dept, grepl("dog",complaint.type.by.dept$Var2, ignore.case=TRUE))
subset(complaint.type.by.dept, grepl("cat|dog|animal|bird|lizard",complaint.type.by.dept$Var2, ignore.case=TRUE))


subset(complaint.type.by.dept, complaint.type.by.dept$Var1 == "DOHMH")

## Nothing is easy, not even renaming columns

names(complaint.type.by.dept) <- c("Agency", "Complaint.Type", "Freq")


## Style Guides make you look good
# http://adv-r.had.co.nz/Style.html
# https://google-styleguide.googlecode.com/svn/trunk/Rguide.xml