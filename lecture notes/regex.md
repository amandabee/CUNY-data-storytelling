REGULAR EXPRESSIONS

I want to spend some time on regular expressions because they're incredibly valuable. You'll hear the abbreviation "Regex", too. 

Just to keep you on your toes, there are slight variations in syntax between programs. (If they ask: http://www.regular-expressions.info/refflavors.html)

You guys have used some of these concepts in any number of research center databases. If you can see the pattern in your data and Excel can't, regular expressions are a huge help. So are Excel formulas.

Sample data is in separate text files, but looks like this:

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

Take the names file into http://www.rubular.com/
[A-Z]*: (\w* \w*) POS
[A-Z]*: (\w*[\w ]*\w*[ ]*) POS <-- Sean Q Burnett

Phone numbers:
Idea from: http://blog.stevenlevithan.com/archives/validate-phone-number

In Sublime, Find > Replace...

[ ]*([\d]{3})[-/. ]*([\d]{3})[-/. ]*([\d]{4})

For next week: * Install CSVKit --
http://csvkit.readthedocs.org/en/latest/tutorial/examining_the_data.html

For more RegEx: I strongly encourage you to walk through Zed Shaw's Regular expressions the hard way: http://regex.learncodethehardway.org/
http://blog.stevenlevithan.com/archives/validate-phone-number

In Calc or Excel
https://help.libreoffice.org/Calc/Functions_by_Category
http://office.microsoft.com/en-us/excel-help/excel-func
