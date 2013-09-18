Pre reading:
    Just HTML http://www.dontfeartheinternet.com/html/html

    http://www.slideshare.net/adnaanwasey/html-fundamentals-for-web-producers

We're going to do two things that I'm guessing some of you will find curiously hard and some will find appallingly easy.

# First: we're going to make an HTML page
We're starting with the most basic pieces. 

You need a folder for work you're publishing. I don't know how you organzie your files for each class, but I'm guessing you've got a folder for data viz. In your "data viz" folder I want everyone to create a folder called "html_to_publish"

HTML: that defines this as an html page. Basic brackets. 
HEAD, BODY: this is the basic division of your HTML page. You can anthrpomorphise it if you want to: the "head" has a lot of information and is great at planning and instructions. The "body" is a lot bigger and describes the stuff you see. Don't worry too much about it but keep in mind that

> Everything goes into either the body or the head.

At this point we're going to save and see a few things about text wrangler that explain why we use that and not just notepad. Now that it knows we're working with HTML, we get color coding and tag completion. 

+ Put a title in the head

+ In the body, add a paragraph and a sentence

+ Save again, and view it in a browser. We're not going to spend a lot of time learning HTML, but we are going to add to this over the semester. The one thing I want everyone to be able to do  is create a legend. So we're going to make a table:
    
        <table>
            <tr>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
            </tr>
        </table>
    
We're going to drop some silly things in our table for now. 

    <table>
        <tr>
            <td></td>
            <td>Arts & Culture</td>
        </tr>
        <tr>
            <td></td>
            <td>Business & Economics</td>
        </tr>
        <tr>
            <td></td>
            <td>Health & Science</td>
        </tr>
        <tr>
            <td></td>
            <td>International</td>
        </tr>
        <tr>
            <td></td>
            <td>Urban Reporting</td>
        </tr>
    </table>
    
And validate the content. http://validator.w3.org/ -- use the "upload" option. So we're going to add somethings:

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="utf-8">     

a simple page will work without these declarations so the truth is that we're just adding them for good form. And so the validator will quit balking. The validator has some good links on choosing a doctype and understanding charsets, but the truth is that you're a long, long way from needing to understand how those parts work. Our assumption is that your goal is to produce stories in a newsroom, where you need to turn over a working demo, but someone else is focused on what goes on under the hood. 

We are seeing something else which is that we have a few tags with attributes now, and those attributes have values. charset and lang are attributes. What are their values?

Let's all break the page by deleting the > on line 15. 

Re-validate: notice that the errors are all on line 16. But we know something is broken, and between our color coding and the validation, we can troubleshoot it. 

## More tags

    DOCTYPE - document type
    html - “what follows is HTML”

    head - invisible part of your page
    link - to attach CSS stylesheets    
    title - title of the page
    meta - information *about* your page, ()like the character set)    
    style - for inline CSS styling
     
    body - visible part of your page
    a - anchors a link (important attribute: href)
    blockquote - for large quotes
    br - line break
    cite - citation
    div - content block or "division"
    em - text w/ emphasis (aka italics)
    h1 - first header
    h2, h3,...h6
    img - image (important attribute: src; always include the alt attribute for accessibility)
    ul - unordered list
    ol - ordered list
        li - list item
    p - paragraph
    span - inline content divider -- think of this as a highlighter. 
    strong - strong text emphasis (aka bold)

Good reading on DOM http://en.wikipedia.org/wiki/Span_and_div

Basic concepts: 
    http://www.dontfeartheinternet.com/

# Those browser plugins

Somebody came to my office last week and I realized that you all probably hate us for asking you to install all these browser plugins on your laptops. Here's how to hide them when you don't need them:

And here's how we're going to use them:

+ Use the Web Developer toolbar to outline table cells

+ Use the firebug inspector to look at the document structure. 


# Then we're going to upload it.

local/remote

URL

Some basic tips: work locally and then upload once you've tested your work.

Look at the difference in the URL: http:// vs file:/// -- one only works on your computer -- it is local. One works for anyone who has access to the internet -- it is on the remote server. 

