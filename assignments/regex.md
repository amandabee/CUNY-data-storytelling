# Regular Expressions

We spent some time in class tinkering with regular expressions. It has been pointed out that this particular chunk of data you could just as easily organize with some spreadsheet dicing and column splits. True enough. But when you can see what you are doing, it is a lot easier to see what you're doing. So I want you to follow our in-class exercise by trying this at home. Definitely don't spend more than an hour on this--half an hour should be enough to get it done. Get as far as you can and keep a note of your expression.

Feel free to keep using [Rubular](http://rubular.com/) to test expressions. The Quick Reference there is your friend!

## We started with this:

    NAME: Sean Burnett POS: RP AGE: 30 WT: 200 BORN: Dunedin, FL SALARY: 2350000
    NAME: Tyler Clippard POS: RP AGE: 27 WT: 200 BORN: Lexington, KY SALARY: 1650000
    NAME: Ross Detwiler POS: SP AGE: 26 WT: 174 BORN: St. Louis, MO SALARY: 485000
    NAME: Christian Garcia POS: RP AGE: 27 WT: 215 BORN: Miami, FL SALARY: N/A
    NAME: Gio Gonzalez POS: SP AGE: 27 WT: 205 BORN: Hialeah, FL SALARY: 3335000
    NAME: Mike Gonzalez POS: RP AGE: 34 WT: 215 BORN: Robstown, TX SALARY: N/A
    NAME: Ryan Mattheus POS: RP AGE: 28 WT: 215 BORN: Sacramento, CA SALARY: 481000
    NAME: Craig Stammen POS: RP AGE: 28 WT: 200 BORN: Coldwater, OH SALARY: 485000
    NAME: Drew Storen POS: RP AGE: 25 WT: 180 BORN: Indianapolis, IN SALARY: 498750
    NAME: Jordan Zimmermann POS: SP AGE: 26 WT: 218 BORN: Auburndale, WI SALARY: 2300000

Our search expression was: `.*AGE: ([0-9]*).*SALARY: (\d*)`  
And we replaced it with: `\1, \2.`  

## Keep going until you’ve got a block like this:

    Sean Burnett, RP, 30, 200, Dunedin, FL, 2350000
    Tyler Clippard, RP, 27, 200, Lexington, KY, 1650000
    Ross Detwiler, SP, 26, 174, St. Louis, MO, 485000
    Christian Garcia, RP, 27, 215, Miami, FL, N/A
    Gio Gonzalez, SP, 27, 205, Hialeah, FL, 3335000
    Mike Gonzalez, RP, 34, 215, Robstown, TX, N/A
    Ryan Mattheus, RP, 28, 215, Sacramento, CA, 481000
    Craig Stammen, RP, 28, 200, Coldwater, OH, 485000
    Drew Storen, RP, 25, 180, Indianapolis, IN, 498750
    Jordan Zimmermann, SP, 26, 218, Auburndale, WI, 2300000

If you’re hooked on regular expressions or committed to mastering them, play around with getting a bunch of disparate phone numbers into a single format or dive right into [Zed Shaw’s Learn RegEx the Hard Way](http://regex.learncodethehardway.org/book/).

