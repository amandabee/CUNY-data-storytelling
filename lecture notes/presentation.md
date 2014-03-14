# Presentation
To follow [Bootstrap](bootstrap.md)

Non-linear: <http://online.wsj.com/news/articles/SB10001424052702303674004577434281689113746>

Stepper: <http://www.nytimes.com/interactive/2010/02/02/us/politics/20100201-budget-porcupine-graphic.html> a [little anatomy of a deal](https://www.propublica.org/article/freddy-mac-mortgage-eisinger-arnold#how-freddies-investments-work)or [the heavy handed stepper](http://www.bloomberg.com/dataview/2014-02-25/bubble-to-bust-to-recovery.html)

Linear: <http://www.nytimes.com//interactive/2011/03/06/us/public-private-employees.html> or <http://qz.com/187433/americas-60-year-love-affair-with-frozen-tv-dinners-is-over/>


# jQuery

Not unlike Bootstrap, jQuery is a compact library of javascript that saves you from having to write from scratch. And … it is really easy to write *for* jQuery, so we can start with the basics and use other people's widgets seamlessly. 

Copy your [bootstrap](bootstrap.md) to a new file, call it jquery.html. And we're going to edit it:

First, we need … jQuery!

	<script src="//code.jquery.com/ui/1.10.4/jquery-ui.min.js"></script>
	


[jQueryUI](jqueryui.com) has a bunch of tools, but we're secretly going to stick with [Bootstrap](http://getbootstrap.com/javascript/#collapse) so we need Bootstrap's JS on top of that:
	
    <script src="//netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min.js"></script>

And then check out [my templates](bootstrap/)


# Highcharts
Secret: we've already been using jQuery to power our highcharts! So we can migrate a highchart onto a page instead of embedding it we need our JS:

	<script src="http://code.highcharts.com/highcharts.js"></script>

And … look at your fiddle: it is calling in some jQuery version. Try changing the version to 1.10.4 and see if that breaks your chart. 