var fs = require("fs");
var md = require('html-md');

var files = fs.readdirSync(".");
for(var i = 0; i < files.length; i++){
  if(fs.statSync(files[i]).isDirectory() === false && files[i].indexOf(".html") !== -1){
    //ok, so its a file

    var text = fs.readFileSync(files[i], "utf8");
    var html = md(text);
    console.log(html);

    var new_filename = files[i].replace(".html",".md");
    fs.writeFileSync(new_filename, html, "utf8");

    fs.unlinkSync(files[i])

  }
}

