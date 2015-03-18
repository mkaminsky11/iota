var stack = {
  stack: [],
  current: null
};

stack.canGoBack = function(){
  if(stack.current !== null && stack.current !== 0){
    return true;
  }
  return false;
};

stack.canGoForwards = function(){
  if(stack.current !== null && stack.current < (stack.stack.length - 1)){
    return true;
  }
  return false;
};

stack.goBack = function(){
  if(stack.canGoBack() === true){
    stack.current--;
    return stack.get();
  }
};

stack.goForwards = function(){
  if(stack.canGoForwards() === true){
    stack.current++;
    return stack.get();
  }
};

stack.goTo = function(link){
  //remove after the current index
  if(stack.current === null){
    stack.current = 0;
  }

  if(link !== stack.stack[stack.current]){
    stack.stack = stack.stack.slice(0, stack.current + 1);
    stack.stack.push(link);
    stack.current = stack.stack.length - 1;
  }
};

stack.get = function(){
  if(stack.current === null){
    return null;
  }
  else{
    return stack.stack[stack.current];
  }
};
