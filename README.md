*(C) 2013 Avi Levin, MIT License*

This project, based on work by Google Apps Script guru [Amit Argawal](http://www.labnol.org/internet/google-scripts/28281/), is a modular system for generating RSS feeds using Google Apps Scripts. This is particularly happy for Internet content repackaging when you don't have your own computer.

RSS.gs defines an API to simplify the work of making the script, instead of having to re-implement Argawal's system within the main file every time. GoComics.gs is a sample application that delivers comics images via RSS with the `script=__` URL parameter.

To deploy, create a new apps script, create/copy RSS.gs and your custom file in it, and follow Step 2 [here](http://www.labnol.org/internet/twitter-rss-feeds/27931/).