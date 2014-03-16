# Bootstrap and SimpleHTTP

## Launching a webserver
It seems like an extra hurdle, but getting a little web server running goes a long way towards being able to test out your code before you upload it to a real web server.

**Step 0:** Start to organize the files that you're putting on Digital Storage into a single directory so you can keep track of them.   
**Step 1:** Enable [New Terminal at Folder](http://osxdaily.com/2011/12/07/open-a-selected-finder-folder-in-a-new-terminal-window/)  
**Step 2:** Navigate to the folder that contains your HTML files. Right click on the folder in your Finder window and select "New Terminal at Folder" -- it might be in a "Services" sub-menu.  
**Step 3:** Check your directory with `pwd` (Just type `pwd` at the command prompt and hit return)  
**Step 4:** Launch [Python's Simple HTTP Server](http://www.pythonforbeginners.com/modules-in-python/how-to-use-simplehttpserver/0) with `python -m SimpleHTTPServer`  

Now you can visit <http://localhost:8000> and see your html files served over a little local web server. 

**Bonus:** in another terminal window try running `python --help` -- see if you can figure out what the `-m` flag is doing. 

### Troubleshooting

Read the error messages you see and think about what they're saying. If you see `Firefox can't establish a connection to the server at localhost:8000.` that means there's no server running on port 8000. You might have the port number wrong, or SimpleServer might have stopped running. Luckily, it is easy enough to restart. If you see :

> Error response
> Error code 404.
> Message: File not found.
> Error code explanation: 404 = Nothing matches the given URI. 

that is a clue that either you tried to open a page that doesn't exist (check the spelling?) or your web server is running from the wrong folder.

## Bootstrap
The secret truth is that you can load Bootstrap's CSS library without a web server, but getting used to testing things over a server will pay off in the long run. I promise.

The reason we're doing it now is so we can include script and CSS files with [protocol-relative URLs](http://www.paulirish.com/2010/the-protocol-relative-url/). *Protoco-huh?* For now, just trust me. Brocolli is better for you than brownies even though brownies won't kill you. Drink lots of water, get plenty of sleep and at least a little vigorous exercise, even if you don't really understand.

We walked through some basics of Bootsrap: you need to call their CSS in the page header, and if you're using any javascript you need to call their javascript before you close the `body` of your page. You need a valid [doctype](http://www.w3.org/QA/Tips/Doctype) definition and a few particular `meta` tags. 

Get started with [my template](https://github.com/amandabee/cunyjdata/blob/master/lecture%20notes/bootstrap/basic_bootstrap.html), and remember to keep an eye on the heirarchy. Everything but the doctype goes in either the `head` or the `body` (and `head` and `body` belong inside of `html` tags). The `head` includes a few `meta` tags, a `title` and any `link` tags that call style sheets. Sometimes you'll put `script` tags in the `head`, sometimes you want them right before the closing `body` tag. Why? That's complicated. Almost everything else will go inside the `body` tag. 

If you're using Bootstrap, start by putting everything inside a container div:

    <div class="container">
        (stuff goes here)
    </div>

You can start adding other elements -- paragraphs, a jumbotron or a set of tabs -- inside that container. 