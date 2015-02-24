var fs = require("fs");
var request = require("request");
var cheerio = require('cheerio');

request({
	uri: "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference"
}, function(err, res, body){
	$ = cheerio.load(body);
	var main = $(".index > ol > li > ol > li > a").each(function(index){
		var href = "https://developer.mozilla.org" + $(this).attr("href");
		console.log(href);
		
		var base = $(this).html().replace("<code>","<!--next-->\n<h2>").replace("</code>","</h2>");
		console.log(base);
	});
});

/*
$.html();
*/