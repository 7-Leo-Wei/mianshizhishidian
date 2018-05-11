"use strict";

$(document).ready(function(){
	$(".question").click(function(){
		$(this).siblings(".answer").slideToggle('slow');
	})
	

	//测试浏览器
	// var userAgent = browserType();
	// alert(userAgent);

	//测试添加元素
	// addLi();




	// 以下代码将以冒泡执行
	// document.getElementById("btn").addEventListener("click",showBtn,false);
	// document.getElementById("second").addEventListener("click",showScd,false);
	// document.getElementById("first").addEventListener("click",showFst,false);

	// 以下代码将以捕获执行
	// document.getElementById("btn").addEventListener("click",showBtn,true);
	// document.getElementById("second").addEventListener("click",showScd,true);
	// document.getElementById("first").addEventListener("click",showFst,true);

	// 上述两段代码将先执行捕获，后执行冒泡。
})



document.addEventListener("visibilitychange",function(){
	if (document.visibilityState == "visible") {
		$(".answer li:first-child").css('color','#ff0000');
	}
	if (document.visibilityState == "hidden") {
		$(".answer li:last-child").css('color','#55ff00');
	}
})


function browserType(){
	var userAgent = navigator.userAgent;    //获取浏览器的userAgent字符串
	var isOpera = userAgent.indexOf("Opera") > -1;    //判断是否为Opera浏览器
	var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera;   //判断是否为IE浏览器
	var isEdge = userAgent.indexOf("window NT 6.1;Trident/7.0") > -1 && !isIE ;    //判断是否为IE的Edge
	var ISFF = userAgent.indexOf("FireFox") > -1; //判断是否为ff
	var isSafari = userAgent.indexOf("Safari") > -1 && userAgent.indexOf("Chrome") == -1;  //判断是否为Safari
	var isChrome = userAgent.indexOf("Chrome") > -1 && userAgent.indexOf("Safari") > -1;  //判断是否为Chrome
	if (isOpera) {
		return "Opera";
	}
	if (isIE) {
		var reIE = new RegExp("MSIE(\\d+\\.\\d+);");
		reIE.test(userAgent);
		var fIEVersion = parseInt(RegExp["$1"]);
		if (iIEVersion == 7) {
			return "IE7";
		}else if (iIEVersion == 8) {
			return "IE8";
		}else if (iIEVersion == 9) {
			return "IE9";
		}else if (iIEVersion == 10) {
			return "IE10";
		}else if (iIEVersion == 11) {
			return "IE11";
		}else{
			return "版本低于7";
		}
	}
	if (isSafari) { return "Safari";} 
    if (isChrome) { return "Chrome";} 
    if (isEdge) { return "Edge";} 
}

function addLi(){
	var cont = document.createDocumentFragment();    //新建一个容器把要添加的内容装起来，最后一次性载入
	for (var i = 0; i < 5; i++) {
		var li = document.createElement("li");
		var content = document.createTextNode(i+'00000');
		li.appendChild(content);
		cont.appendChild(li);
	}
	var addLi = document.getElementById("addLi");
	addLi.appendChild(cont);
}


//使用this和prototype创建类和实例
// 创建类
function Mobile(name,price){
	this.name = name;
	this.price = price;
}
// 创建类的方法或属性
Mobile.prototype.sell = function(){
	alert(this.name+"售价￥"+this.price);
};
// 创建实例
function showHuawei(){
	var huawei = new Mobile("Honor 6X",1266);
	huawei.sell();
}

//Object.create()方法创建类和实例
// 原始方法创建类
var Person = {
	firstname:"Mark",
	lastname:"Yun",
	age:25,
	introduce:function(){
		alert('I am ' + this.firstname + ' ' + this.lastname + ',I am ' + + this.age + '.');
	}
}
//个人改良，使用传参设置变量内容创建类
function crtPerson(fname,lname,age){
	var Person = {
		firstname:fname,
		lastname:lname,
		age:age,
		introduce:function(){
			alert('I am ' + this.firstname + ' ' + this.lastname + ',I am ' + + this.age + '.');
		}
	}	
	return Person;
}
//兼容IE9以下版本
if (!Object.create) {
	Object.create = function(o){
		function F(){};
		F.prototype = o;
		return new F();
	}
};
// 创建实例1
function showPsn_1(){
	var person_1 = Object.create(Person);
	person_1.introduce();
}
function newPsn(){
	var person_3 = crtPerson("Tom","Hacks",36);
	person_3.introduce();
}
// 创建实例2
function showPsn_2(){
	var person_1 = Object.create(crtPerson("Jerry","Lee",26));
	person_1.introduce();
}

// 极简主义法：调用createNew()方法得到实例对象
// 创建类
var Cat = {
	age:3,    //共享数据部分，定义在类对象中，createNew()外
	createNew:function(){
		var cat = {};
		cat.name = "小米";
		var sound = "喵喵喵";  // 私有属性，定义在createNew()内，输出对象外
		cat.makeSound = function(){
			alert(+'岁的'+this.name+sound);   // 暴露私有属性
		}
		cat.changeAge = function(num){
			Cat.age = num;   //修改共享数据
		}
		return cat;  //输出对象
	}
}
function newCat(){
	var cat_1 = Cat.createNew();
	cat_1.makeSound();
	cat_1.changeAge(6);
	cat_1.makeSound();
}

// ES6语法糖class：用new 关键字生成实例对象
class Point{
	constructor(x,y){
		this.x = x;
		this.y = y;
	}
	toString(){
		alert('('+this.x+','+this.y+')') ;
	}
}
function newPint(){
	var point = new Point(2,3);
	point.toString();
}


// 以下代码将以冒泡执行
function showFst(){
	alert("first");
}
function showScd(){
	alert("second");
}
function showBtn(event){
	alert("btn");
	event.stopPropagation();
}

function showBtnStp(event){
	alert("btn");
	event.stopPropagation();    //阻止冒泡事件
}

// 比较target和currentTarget的区别
// currentTarget始终指向目标元素
function showClassCrtTarg(e){
	alert(e.currentTarget.className);
}
// target指向当前事件元素
function showClassTarg(e){
	alert(e.target.className);
}


// 获取元素在页面中的绝对位置
function showPos(e){
	alert(e.target.offsetLeft+"__"+e.target.offsetTop);
}


// 函数调用
function addNumber(a,b){
	return a+b;
}
// call方法调用
function callRes(){
	var res = addNumber.call(res,3,2);
	alert(res);
}
// apply方法调用
function applyRes(){
	var res = addNumber.apply(res,[3,2]);
	alert(res);
}

// 事件委托，addEventListener支持IE9及以上现代浏览器，IE9以下用attachEvent
var answer = document.getElementById("answer");
answer.addEventListener("click",function(event){
	var target = event.target;
	var li = answer.getElementsByTagName("li");
	for (var i = 0; i < li.length; i++) {
		if (target == li[i]) {
			alert(li[i].innerHTML);
		}
	}
})

