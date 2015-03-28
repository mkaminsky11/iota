var docsets = {};

docsets.refresh = function(){
  defaults = [];
  var json = JSON.parse(fs.readFileSync("docs/docs.json", "utf8")).data;
  for(var x = 0; x < json.length; x++){
    var name = json[x].name;
    var path = json[x].path;

    var to_push = {
      name: name,
      path: path
    };

    to_push.data = [];

    for(var y = 0; y < docs.length; y++){
      if(docs[y].folder === path){
        to_push.data.push(docs[y]);
      }
    }

    defaults.push(to_push);
  }
};
