var browse = {
  index: null
};

browse.init = function(){
  //input = #type

  //on down, go down
  //on up, go up

  //on enter, show this
  $(document).keydown(function(e) {
      if(e.which === 38){
        //up
        if(browse.index > 0){
          browse.index--;
          browse.select(browse.index);
        } else if(browse.index === null){
          browse.index = 0;
          browse.select(browse.index);
        } else if(browse.index == 0){
          browse.reset();
        }
      }
      else if(e.which === 40){
        //down
        if(browse.index < $(".sidebar-item").length){
          browse.index++;
          browse.select(browse.index);
        } else if(browse.index === null){
          browse.index = 0;
          browse.select(browse.index);
        } else if(browse.index === $(".sidebar-item").length){
          browse.reset();
        }
      }
      else if(e.which === 13){
        if(browse.index !== null){
          openPath($($(".sidebar-item").get(browse.index)).attr("data-path"));
        }
      }
      else if(e.which === 27){
        browse.reset();
      }
  });
};

browse.reset = function(){
  //on search change
  //on delete
  //on new
  $(".item-active").removeClass("item-active");
  browse.index = null;
};

browse.select = function(index){
  $(".item-active").removeClass("item-active");
  $($(".sidebar-item").get(index)).addClass("item-active");
};

browse.doclick = function(path){
  var this_element = $("[data-path=\""+path+"\"]").get(0);
  var index = $(".sidebar-item").toArray().indexOf(this_element);
  browse.index = index;
  browse.select(index);
};
