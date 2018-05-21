$(document).ready(function(){
	$(".question").click(function(){
		$(this).siblings(".answer").stop().slideToggle('slow');
	})
})


var robot = {
	name: 'Robot',
	height: 1.2,
	run: function () {
		console.log(this.name + 'is running.');
	}
}

function creatStudent(name) {
	var newStu = Object.create(robot);
	newStu.name = name;
	return newStu;
}
var xiaoming = creatStudent('小明');
xiaoming.run();

// function Student(name) {
// 	this.name = name;
// 	this.hello = function () {
// 		console.log('Hello, '+this.name+'!');
// 	}
// }
// var xiaohong = new Student('小红');
// xiaohong.hello();

function Student(stuData) {
	this.name = stuData.name || '匿名';
	this.grade = stuData.grade || 1;
}
Student.prototype.introduce = function(){
	console.log('Hello, I\'m ' + this.name + ', I\'m from Grade ' + this.grade + '.');
};
function createStudent(stuData) {
	return new Student(stuData || {});
}
var xiaojun = createStudent({
	name: '小军'
})
xiaojun.introduce();    //Hello, I'm 小军, I'm from Grade 1.

class Fruits {
	constructor(name) {
		this.name = name;
	}
	hello () {
		console.log('This is a ' + this.name + '.');
	}
}
var banana = new Fruits('Banana');
banana.hello();    //This is a Banana.

class priFruits extends Fruits {
	constructor(name, level) {
		super(name);    //用super调用父类的构造方法，必须！
		this.level = level;
	}
	myGrade () {
		console.log('This is level ' + this.level + '.');
	}
}
var apple = new priFruits('apple', 2);
apple.hello();    //This is a apple.
apple.myGrade();    //This is level 2.
