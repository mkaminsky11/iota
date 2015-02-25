var fs = require("fs");
var request = require("request");
var cheerio = require('cheerio');

request({
	uri: "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference"
}, function(err, res, body){
	$ = cheerio.load(body);
	var main = $(".index > ol > li > ol > li > a").each(function(index){
		var href = "https://developer.mozilla.org" + $(this).attr("href");

		var base = $(this).html().replace("<code>","<!--next-->\n<h2>").replace("</code>","</h2>");
        request({
           uri: href
        }, function(err, res, bdy){
            $ = cheerio.load(bdy);
            try{
                var wiki = $("#wikiArticle").html().split("<h2 id=\"Examples\">Examples</h2>")[0];

                wiki.replace(/class="(.*?)"/g, "");
                wiki.replace(/id="(.*?)"/g, "");
                wiki.replace(/href="(.*?)"/g, "");

                console.log(href);
            }
            catch(e){}
        });
	});
});

/*
$.html();
*/
