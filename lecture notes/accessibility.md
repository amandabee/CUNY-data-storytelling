# Accessibility

Here's a serious challenge: many websites do a poor job of accomodating people with disabilities. So just looking at what the *Times* does is not necessarily going to put us on the right path (though, as it turns out, the *Times* does pretty well.)

The [Web Accessibility Initiative](http://www.w3.org/WAI/users/Overview.html) is the canonical source for information on making web pages accessible to people with disabilities. (WAI also happens to be a great place to find resources on customizing your own browser and otherwise adapting your computer to your own disabilities). [Section 508]() is an amendment to a federal law -- it lays out fairly specific guidelines for material that the federal goverment makes available electronically. 

It is also pretty dense. Some less dense resources? 

[Smashing Magazine](http://www.smashingmagazine.com) has a great piece on [mobile accessibility](http://www.smashingmagazine.com/2014/05/21/mobile-accessibility-why-care-what-can-you-do/). It gets into a lot of specifics about HTML, but you can skim it and then return to it.

[A List Apart](http://alistapart.com/)(http://alistapart.com/article/accessibility-the-missing-ingredient) also wrote about accessible web design recently. They, too, focus on the nitty gritty of HTML and interface design, but there's plenty worth reading and thinking abou there.

And [WebAim](http://webaim.org) publishes a [very useful checklist](http://webaim.org/standards/508/checklist) to guide compliance with web accessibility standards. 

*TK [National Federation of the Blind](http://nfb.org) has led some trainings.*


## Semantic, Responsive
One nice thing about "responsive design," or building web pages that work as well on a 3inch phone screen as they do on a desktop monitor is that many of the principles overlap tidily. 

The Semantic Web provides a common framework that allows data to be shared and reused across application, enterprise, and community boundaries.

In practice, at our level, "semantic web" means using html tags to define content ( `<p>...</p>` defines a paragraph, etc) and then CSS to style that content. The approach is responsive: it is easier to vary CSS in response to a device's display capability if the content is organized and marked up. Using markup to bound anchors, headings, images and paragraphs also makes your content much easier for screen readers to interpret. 


## The Basics
The **first rule** of accessibility is this: text should be text. 

The Detroit Free Press recently ran a [story](http://www.freep.com/interactive/article/20130915/NEWS01/130801004/Detroit-Bankruptcy-history-1950-debt-pension-revenue) full of intricate diagrams describing Detroit's descent into bankruptcy. Much of the detail is captured in flowchart graphics. I can zoom in, but they start 
to loose resolution fast, and a screen reader can't do anything with pictures. You could lay this out as HTML, but that's hard. Sadly, lots and lots of newsrooms take this super easy route. It is easy to layout a diagram in Illustrator and save it as a PNG. It is much more complex to layout a diagram in HTML and SVG.



The **second rule**? Always use alt tags, whether you're using a content management system or writing html yourself. HTML image tags take an `alt="Some descriptive text"` attribute, WordPress's "Add an Image" dialog includes an "Alternate Text" option. The `alt` text should describe the image as clearly and concisely as possible. `alt="Photograph of a dog making faces at the camera"` for instance. 


**Rule 3:** Loads of people are color blind. I went to [Wikipedia](https://en.wikipedia.org/wiki/Color_blindness) on this so a better source is welcome, but roughly 1% of men cannot distinguish purples from blues and see reds and greens as very similar. 1% is a lot. The simplest takeaway is: avoid using color gradients that show poles as red and green, especially in data visualizations. [ProPublica recommends](https://github.com/propublica/guides/blob/master/news-apps.md#colors) [ColorOracle](http://colororacle.org/)

**Rule 4:** You can't control everything. Any document (or story or page) should be readable even if the user loads their won style sheet. Yes: this means they can make the page look ghastly. But the content should still be available, without any loss of meaning. Here's where semantic markup comes in handy. 

## Advanced Accessibility

Captions, transcripts, audio descriptions. http://webaim.org/techniques/captions/
Few newsrooms provide these, so this is an opportunity for us to show leadership and establish a workflow


## What does AP Style say?

*TK, but they do have a passage in current stylebooks.*

## But is it "Bobby Approved"?

If you've been making the web for a while now, you might remember Bobby, a free online tool that tested websites for compliance with WAI and Section 508 standards and issued a "Bobby Approved" seal to sites that passed. Bobby shut down in 2005. So there's no more Bobby. 

## What about Section 508

Again, if you're old school, you might remember [Section 508](https://en.wikipedia.org/wiki/Section_508). Section 508 refers to a passage of a federal law (Not the ADA, FWIW) that requires the Federal government to ensure that all information that is available electronically is accessible to people with disabilities. Section 508 spells out a useful baseline, but it was last updated in 1998 and the WAI is a more current resource.
