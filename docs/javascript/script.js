var fs = require("fs");
var request = require("request");
var cheerio = require('cheerio');
var md = require('html-md');

var goal;
var pages = [];
var page = 0;

request({
	uri: "https://developer.mozilla.org/en-US/docs/Web/Javascript/Reference"
}, function(err, res, body){
		$ = cheerio.load(body);
		var main = $("#wikiArticle a")
		goal = main.length;
		main.each(function(index){
			var href_temp = "https://developer.mozilla.org" + $(this).attr("href");
			pages.push(href_temp);
		});

		setTimeout(function(){
			get(pages[0]);
		}, 100);
});

function get(href){
	request({
		uri: href
	}, function(err, res, bdy){
			try{
					var this_array = href.split("/");
					var this_name = this_array[this_array.length - 1];

					var wiki = bdy.split("<article id=\"wikiArticle\">")[1].split("</article>")[0].split(/<h2(.*?)Specifications(.*?)h2>/)[0];

					wiki = wiki.replace(/class="(.*?)"/g, "");
					wiki = wiki.replace(/id="(.*?)"/g, "");
					wiki = wiki.replace(/<h2(.*?)>/g, "<h3>");
					wiki = wiki.replace(/<\/h2>/g, "</h3>");
					wiki = wiki.replace("<section>(.*?)</section>","");
					wiki = wiki.replace(/<\/div>/g, "");
					wiki = wiki.replace(/<div>/g, "");
					wiki = wiki.replace(/<!--(.*?)-->/g,"");
					wiki = "<h2>" + this_name.split("_").join(" ") + "</h2>\n" + wiki;
					wiki = md(wiki);

					wiki = wiki.replace(/\/en\//g, "https://developer.mozilla.org/en/");
					wiki = wiki.replace(/\/en-US\//g, "https://developer.mozilla.org/en/");

					var file = "js_" + this_name + ".md";
					goal--;
					console.log(goal + " left");
					fs.writeFileSync(file, wiki, 'utf8');

			}
			catch(e){
				goal--;
			}

			page++;
			if(page !== pages.length){
				//all ok
				setTimeout(function(){
					get(pages[page]);
				}, 100);
			}
	});
}
