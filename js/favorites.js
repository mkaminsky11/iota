var fav = {};

fav.fav = function(path){
  if(path !== null){
    if(fav.isFav(path)){
      //unfavorite
      var data = JSON.parse(localStorage.getItem("iotaFav"));
      data = data.splice(data.indexOf(path), 1);
      $('.star').removeClass('star-active')
      localStorage.setItem("iotaFav", JSON.stringify(data));
    } else {
      //favorite
      var data = JSON.parse(localStorage.getItem("iotaFav"));
      data.push(path);
      $('.star').addClass('star-active');
      localStorage.setItem("iotaFav", JSON.stringify(data));
    }
  }
};

fav.setFav = function(path){
  if(path !== null){
    if(fav.isFav(path)){
      $('.star').addClass('star-active')
    } else {
      $('.star').removeClass('star-active');
    }
  }
};

fav.reset = function(){
  $('.star').removeClass('star-active');
};

fav.isFav = function(path){
  if(path !== null){
    var data = JSON.parse(localStorage.getItem("iotaFav"));
    if(data === null){
      localStorage.setItem("iotaFav",JSON.stringify([]));
      return false;
    }
    else if(Object.prototype.toString.call(data) === '[object Array]' ){
      //ok, is an array
      if(data.indexOf(path) === -1){
        return false; //not there
      }
      else{
        return true;
      }
    }
    else{
      //not even an array
      localStorage.setItem("iotaFav",JSON.stringify([]));
      return false;
    }
  }
};
