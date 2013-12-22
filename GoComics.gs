//This example fetches a comic from GoComics. This only works on comics with banners
//All code in here is user-defined

//Update every four hours
var UpdateInterval = 3600*4;

//stub method
function initialize (){}

function processParameters(parameters)
{
	//Return object
	var rssObject = {posts: []};
	var rssPost = {};

	//URL of comic
    var url = "http://www.gocomics.com/" + parameters.strip;
	
	//get HTML of comics page
	var source = UrlFetchApp.fetch(url).getContentText();
	
	//Get the important part of page for further parsing. Future use would have a JXON library
	var doc = Xml.parse(source, true).html.body.getElements("div")[1]
      .getElements("div")[1].getElement("div").getElements("div")[2].getElement("div"); //#content > div.top
    
    
	//Get the date
	var dateHref = doc.h1.a.href;
        dateHref = dateHref.substring(dateHref.length - 10)
    var dateObj = new Date(dateHref);
        dateObj = new Date(dateObj.getTime() - 3600000); //Eastern Time Zone - I'm in Central
        
	rssObject.title = doc.h1.a.Text;
	rssObject.link = url;
  
	rssObject.date = dateObj.toUTCString(); 
	rssPost.title = doc.getElement("ul").getElement("li").Text;
	rssPost.author = doc.h1.span.Text.substring(4);
	rssPost.date = rssObject.date;
	rssPost.id = "http://www.gocomics.com/" + dateHref;
	rssPost.link = rssPost.id;
	//content is only the image
	rssPost.content = doc.p.a.img.src;
	
	rssObject.posts[0] = rssPost;

	return rssObject;
}

function debug() {
  debugWrap( {parameter: {strip: "garfieldminusgarfield"}} )
}
