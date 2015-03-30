## node-webkit-的文档加载顺序测试.以及对process的疑问

### 上代码
`try{
	var gui = require('nw.gui');
	var win = gui.Window.get();
}catch(e){
	console.log(e);
}
var isShowWindow = true,tray
win.on('document-start',function(){
	console.log('document-start .. ');
});
win.on('document-end',function(){
	console.log('document-end .. ');
	try{
		var process = require('process');
		console.log('process load success .. ');
	}catch(e){
		console.log('process load failure .. ');
	}
});
win.on('loaded',function(){
	console.log("loaded  .. !");
	try{
		var process = require('process');
		console.log('process load success .. ');
	}catch(e){
		console.log('process load failure .. ');
	}
});
win.window.onload =function(){
	try{
		var process = require('process');
		console.log('win.onload process load success .. ');
	}catch(e){
		console.log('process load failure .. ');
	}
};
$(document).ready(function(){
	try{
		var process = require('process');
		console.log('$.onload process load success .. ');
	}catch(e){
		console.log('process load failure .. ');
	}
});`
### 测试结果:
process load failure .. 
document-end ..  
process load failure ..  
process load failure ..  
loaded  .. ! 
process load failure ..  

### 分析
jquery的ready > nw.gui.window 的 document-end事件 > window.onload >  nw.gui.window 的 loaded事件
### 疑问
只有在加载nodejs的process模块才加载失败,加载util 或者其他模块不会报失败! 真心不知道这是怎么的...node官方API写着process对象是一个全局对象，可以在任何地方访问到它。

### 解答
经过测试 终于明白啥叫全局对象 , 不需要require..怪不得加载不出来..唉 自坑啊