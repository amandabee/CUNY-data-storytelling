Web Scraping Exchange

A Star Tribune Reporter (Alejandra Matos) writes: 

> I am working on an insurance fraud story and what to look at chiropractors in the state that have been disciplined for defrauding insurance companies. The board keeps all their disciplines here: http://www.mn-chiroboard.state.mn.us/discipline_list.htm

> Is it possible to scrape each PDF for the word "insurance" instead of having to open each PDF myself and finding the word.

And a Trib News Apps developer (David Eads) replies:

> It looks like you'll need to OCR these PDF files as they all seem to be bitmap image data.

> Once you have text extracted, searching them should be easy. I'm a command line dork, so I'd probably use `grep -Ri insurance /path/to/text-files/` but you'll have a ton of options for searching the collection of documents.

Ted Han has another solution:

> You could upload them to DocumentCloud and search through them there 

And together the list has a few good command line tools for extracting (unstructured) text from PDFs: 

Docsplit (which powers DocumentCloud internally) http://documentcloud.github.io/docsplit/  runs with `docsplit text *.pdf` and spits out a txt
file for each document. It is probably the best solution, though https://code.google.com/p/pytesser/ and  https://code.google.com/p/ocropus/ are out there. 

