var docsets = {};

docsets.refresh = function(){
  defaults = [];
  $(".select-docset").html();
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

  for(var i = 0; i < defaults.length; i++){
    var add_option = "<option value=\""+defaults[i].path+"\">"+defaults[i].name+"</option>";
    $(".select-docset").append(add_option);
  }

  if(defaults.length === 0){
    $(".select-docset").html("<option value=\"null\">No docsets available</option>");
    $(".select-docset").val("null");
  }
  else{
    $(".select-docset").val(defaults[0].path);
  }
};

docsets.makeid = function(doc, tries){
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    for( var i=0; i < 6; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    var new_filename =  "docs/" + doc + "/" + text + ".md";
    console.log(new_filename);
    if(!docsets.exists(new_filename)){
      return new_filename;
    } else{
      if(tries > 999){
        //ok, too many
        return null;
      } else {
        return docsets.makeid(doc, tries++);
      }
    }
}

docsets.new = function(doc){
  var new_filename = docsets.makeid(doc, 0);
  if(new_filename === null){
    //error!
    alert("there was an error! You have too many documents!");
  }
  else{
    $('#choose-docset').slideUp()
    fs.writeFileSync(new_filename, "##this is your new file!\n\n\nhello, world!", "utf8");
    init();
    search($("#type").val());
    openPath(new_filename);
    editors.open(new_filename);
  }
}

docsets.exists = function(path){
  try{
    var stat = fs.statSync(path);
    return true;
  }
  catch(e){
    return false;
  }
}
