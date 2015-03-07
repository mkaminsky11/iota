
var fs = require("fs");
var request = require("request");
var md = require('html-md');

request({
	uri: "https://nodejs.org/api/all.json"
}, function(err, res, body){
  var obj = JSON.parse(body);
  loopThrough(obj);
});


function loopThrough(elem){
  if(elem.constructor === Array){
    for(var i = 0; i < elem.length; i++){
      loopThrough(elem[i]);
    }
  }
  else{
    if(!!elem.textRaw === true && !!elem.desc === true){
      var header = elem.textRaw;
      var html = elem.desc;
      var name = elem.name;

      header = header.replace(/`/g, "");

      html = "<h2>" + header + "<h2/>\n" + html;
      html = md(html);

      html = html.replace(/a href=\"/g, "a href=\"https://nodejs.org/api/");

      //insert this

      fs.writeFileSync("nodejs_" + name + ".md", html, 'utf8');
    }

    //now, loop through it

    for (var property in elem) {
        if (elem.hasOwnProperty(property)) {
            // do stuff
            var prop = elem[property];
            if(prop.constructor === Array && property !== "params" && property !== "signatures"){
              loopThrough(prop);
            }
        }
    }
  }
}
