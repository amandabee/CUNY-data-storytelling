If you really want to master the command line, Zed Shaw's <a href="http://cli.learncodethehardway.org/">Command Line Crash Course</a> is probably indispensible. I've never actually taken it but I've taken other Zed Shaw classes and he's good at what he does. 

By default, OSX's Terminal (and Ubuntu) both use <a href="http://www.gnu.org/software/bash/manual/bashref.html">Bash</a>. Bash is actually just one of many command line interpreters out there, but comparing the relative merits of shell environments is well, well beyond the scope of our class. You probably won't use the command line much in your career as a journalist but if you're going to work with data, there are times when it can save you from tearing your hair out. If you go to Socrata you can download a 2.24 GB file that contains a record of every single call to 311 since 2010. You can't open it in Excel, however -- it is too big. 

So if you want to get some kind of handle on what is in the file, you need some way to examine it without opening it. Enter the shell. <!--more-->

If you use OSX, you'll find Terminal.app in Applications > Utilities -- I always add it to my dock for quicker access.  

Launch it, and take another pass at some of the commands we used in class:

`man` is the "manual" command. It should be followed by the command you want the manual for. Always read the man page for a command if you aren't sure what it does, especially if you've found a helpful stranger who is giving you commands to enter. Exit the manual by typing "q"

Most commands also include briefer help that you can access with the "--help" suffix. Try this one:

`cd --help`

**Finding Your Way Around**

`pwd` returns the working directory name. The "working directory" is the directory you are in. 

`cd` changes directories. Typing cd without naming the path to move *to* will bring you to your home directory. On a mac that's /Users/yourname

`ls` lists the contents of any directory. 

`mkdir` creates a new directory. 

**A word about directory structures: **everything on your computer is organized into folders. You spend most of your time working in your home directory, which is probably located at `/Users/yourname` so if you have a data-interactive folder in your Documents folder on your computer the full path to that would be `/Users/yourname/Documents/data-interactive`  OSX paths are not case sensitive but it is good practice to respect cases in file names. On OSX and Linux machines, you can use what are called "relative" or "absolute" paths to identify files and folders. An absolute path starts with "/" (that's called a "slash" -- Windows uses backslashes "\") `/Users/yourname/Documents/data-interactive` is an absolute path. A relative path is relative to your working directory. If you're already in "/Users/yourname" you can see the contents of your data-interactive directory with `ls Documents/data-interactive`. You can also use `../` to go up one level, so if you're working in `/Users/yourname/Documents/data-interactive` and you want to see a list of files in `Documents/craft2` you would say `ls ../craft2`

**Getting Unstuck**
Sometimes you make mistakes. Crazy, but true. Sometimes you try to put something in quotes and you don't close the quote but you hit return and suddenly Bash is acting all weird on you and won't return you to your prompt. Do not despair. Just type control-c, to cancel your current command. 

In class, we didn't get quite this far but we were going to create a folder called "data-interactive" in your Documents folder with the following sequence:

`cd Documents     
mkdir data-interactive      
ls     
cd data-interactive     
cd     
cd Documents/data-interactive`

Go ahead and try that. But ... do yourself a huge favor. Don't cut and paste, try typing everything out. You can use tab completion to save some time -- type the first few letters of the directory you want to change into and hit `tab` -- if the directory exists, Bash will take you there. 


**Examining Text Files**
`more` opens a file to read in the terminal. You have to type "q" to get out of the more screen.   
`head` prints the first n lines of a file  
`tail` prints the last n lines of a file   
`cat` prints a whole file  
`wc` counts the words in a file. The -l option counts lines instead of words.  
`less` opens the file in the shell so you can move through it with arrow keys. Type "q" to exit less  

**Copying files**
It is usually a good idea to make a backup.   

`cp flutrends.txt flutrends.txt.backup`  

**Redirection**
Redirection is a tricky concept at first but it is actually fairly simple. Most of the tools we're working with just print content right to the screen. That's called standard output or `stdout`. Sometimes you actually want to keep what you've printed in a new file. For instance, if you're trying to retrieve a document from the web with curl, you probably want to store it. You'd use the "greater than" to redirect the output of curl from the screen to a file, but providing a file name:

`curl http://www.google.org/flutrends/data.txt > flutrends.txt`   

IMPORTANT: the shell environment, unlike OSX's graphical environment, assumes you mean to do what you say you mean to do. If you already have a file called "flutrends.txt," Bash will overwrite it with the output from curl. It won't warn you that you're replacing an existing file. 

> See if you can remember how to examine the first 15 lines of flutrends.txt? Can you count the lines of flutrends.txt?

**Searching**
The only reason we're going through any of this is so that we can search files! 

`grep` is the search command we're going to use. If you are a programmer or have friends who are programmers, at least 50% of them will tell you awk is better. That's useful information if you want to be a programmer. grep will print (to the screen) every line that matches your search. So...

`grep "2004-11" flutrends.txt `   

will print the few lines of data in that file that refer to November of 2004. If you actually want to use it, you need to redirect the output to a new file:

`grep "2004-11" flutrends.txt > nov_2004_flutrends.txt`

Just for kicks, let's do something really stupid. 

`grep "2004-11" flutrends.txt > flutrends.txt
more flutrends.txt`

Oops! Good thing you have a backup:

`cp flutrends.txt.backup flutrends.txt`

We need one more thing from our flu trends file before we can do much with it, though: We need the row names. This particular file ...

`head -n 15 flutrends.txt
grep "Argentina" flutrends.txt > header_row.txt`

You can do more, lots and lots more, with command line tools, but the set of commands described above is enough to save you from unnecessary data reporting headaches. 

PS. Most of you noticed that `ls` worked differently on the podium machine than it did on your laptops. That is pretty frustrating. I don't know why that is. Usually a custom alias like that would be stored in a file called `.bash-profile` or `<a href="http://superuser.com/questions/49289/what-is-the-bashrc-file">.bashrc</a>`. I did some sleuthing and found that there is a global `bashrc` file that starts with this line:

`alias ls='ls -laskhGF'`

Why it is there, I cannot say. But I can override it by creating a file in my own home directory called `.bashrc` and adding this line to it:

`unalias ls` 

If you're genuinely curious about how that all works. I'm happy to convert you to the command line. Come by my office!

