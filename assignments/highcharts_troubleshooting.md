Highcharts Checklist

The truth is that embedding Fiddles is fiddly. Instead of learnning how to do that, let's stick to learning how to put a chart on our own page. 

##Troubleshooting checklist:  

+ Did you place a `<div..>…</div>` on the page where you want the chart to appear?
+ Does your `<div>` have a descriptive, one word id? `id="container"` is not descriptive. `id="time_to_leak"` is.
+ Is your Highcharts Function looking for the right id?  
`$(function () {$('#oscar_night').highcharts({` is looking for a div with `id="oscar_night"` 
+ Is your jquery call above your function?
+ Is your highcharts call below your function?




