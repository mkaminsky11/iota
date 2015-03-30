var fs = require("fs");
var exec = require('child_process').exec;
exec('git pull', function (error, stdout, stderr) {
  var files = fs.readdirSync(".");
  for (var i in files){
      var title = files[i];
      if (!fs.statSync(title).isDirectory() && title.indexOf(".md") !== -1){
        console.log(title);

        var content = fs.readFileSync(title, "utf8");
        content = "## " + title.replace(".md","") + "\n\n" + content;
        fs.writeFileSync(title, content, "utf8");
      }
  }
});
