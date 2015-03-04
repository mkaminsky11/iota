var fs = require("fs");
var request = require("request");
var cheerio = require('cheerio');

request({
	uri: "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference"
}, function(err, res, body){
		$ = cheerio.load(body);
		var main = $(".index > ol > li > ol > li > a")
		var goal = main.length;
		main.each(function(index){
			var href = "https://developer.mozilla.org" + $(this).attr("href");

	        request({
	           uri: href
	        }, function(err, res, bdy){
	            try{
									var wiki = bdy.split("<article id=\"wikiArticle\">")[1].split("</article>")[0].split("<h2 id=\"Examples\">Examples</h2>")[0];

	              	wiki = wiki.replace(/class="(.*?)"/g, "");
	                wiki = wiki.replace(/id="(.*?)"/g, "");
	                wiki = wiki.replace(/href="(.*?)"/g, "");
									wiki = wiki.replace(/<h2(.*?)>/g, "<h3>");
									wiki = wiki.replace(/<\/h2>/g, "</h3>");
									wiki = wiki.replace("<div><section class=\"Quick_links\" id=\"Quick_Links\"><!-- --></section></div>","");
									//wiki = wiki.replace(/<pre(.*?)>/g, "<pre><code class=\"language-markup\">");
									wiki = wiki.replace(/<code(.*?)>/g, "<code class=\"language-markup\">");
									wiki = wiki.replace(/<\/pre>/g, "</code></pre>");

									wiki = "<h2>" + href.split("/CSS/")[1] + "</h2>\n" + wiki;

	                var file = "css_" + href.split("/CSS/")[1] + ".html";
									goal--;
									console.log(goal + " left");
									fs.writeFileSync(file, wiki, 'utf8');

	            }
	            catch(e){
								goal--;
							}
	        });


			});
});

/*
$.html();
*/
