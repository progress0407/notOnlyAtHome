function Person(){}
var p1 = new Person();
p1.name = 'egoing';
p1.introduce = function(){
    return 'My name is '+this.name; 
}
console.log(p1.introduce());
 
var p2 = new Person();
p2.name = 'leezche';
p2.introduce = function(){
    return 'My name is '+this.name; 
}
console.log(p2.introduce());

class Person {
    
    Person(name){
        this.name = name;
    }

    var name = '';

    introduce() {
        return 'My name is '+this.name; 
    }
}

p1 = new Person('egoing');
p2 = new Person('leezche');

console.log(p1.introduce());
console.log(p2.introduce());

/*
암시적으로: 생략했을때 기본적으로 ~이 사용된다.
eg)    Person(name='sw.cho')

*/

window {
    func : () => {};
}

var o = {
    'func' : () => console.log('hello')
}

function func(){
    if(window === this){
        console.log("window === this");
    }
}
func(); 

=====
var fn1 = ()=> console.log(this === window);
// false
var o1 = {
    fn : () => console.log(this === window)
};

// true
var o = {
    func : function(){
        if(o === this){
            console.log(o === this);
        }
    }
}
o.func();  

var o = {
    func : function(){
            console.log(o === this);
    }
}



var funcThis = null; 
function Func(){
    funcThis = this;
    console.log('constructor : o2');
}
var o2 = new Func();
if(funcThis === o2){
    console.log('func :  o2');
}

var o = {}
var p = {}
function func(){
    switch(this){
        case o:
            console.log('o');
            break;
        case p:
            console.log('p');
            break;
        case window:
            console.log('window');
            break;          
    }
}
func();
func.apply(o);
func.apply(p);

func.prototype

function Person(name){
    this.name = name;
}
Person.prototype.name=null;
Person.prototype.introduce = function(){
    return 'My name is '+this.name; 
}
 
function Programmer(name){
    this.name = name;
}
Programmer.prototype = new Person();
 
var p1 = new Programmer('egoing');
console.log(p1.introduce());



function Person(name){
    this.name = name;
}
Person.prototype.name=null;
Person.prototype.introduce = function(){
    return 'My name is '+this.name; 
}
 
function Programmer(name){
    this.name = name;
}
Programmer.prototype = new Person();
Programmer.prototype.coding = function(){
    return "hello world";
}
 
var p1 = new Programmer('egoing');
console.log(p1.introduce());
console.log(p1.coding());

p1.toString();
class He{}


function Ultra(){}
Ultra.prototype.ultraProp = 10;
o1 = new Ultra();

function Super(){}
Super.prototype = new Ultra();
o2 = new Super();

function Sub(){}
Sub.prototype = new Super();
o3 = new Sub();

var a = {
    b: {
        c: 3
    }
}
 
var arr = new Array('seoul','new york','ladarkh','pusan', 'Tsukuba');
function getRandomValueFromArray(haystack){
    var index = Math.floor(haystack.length*Math.random());
    return haystack[index]; 
}
console.log(getRandomValueFromArray(arr));



// Promise 

/*
1. State : 무거운 명령어를 수행중인가? 끝났으면 성공했는가, 실패했는가
2. 제공자와 소비자의 차이를 알기
*/

// 1. 제공자인 Promise

promise = new Promise((resolve, reject) => {
    console.log('doing something...');
    setTimeout(() => {
        resolve('ellie');
        //reject('no..');
        //reject(new Error('no network'));
    }, 1200);
});

// 2. 소비자 : then, catch, finally
promise
    .then((value) => {
        console.log(value);
    })
    .catch(error => {
        console.log(error);
    })
    .finally( () => {
        console.log('finally');
    });



var fetchNum = new Promise( (resolve, reject) => {
    setTimeout( () => {
        resolve(1);
        console.log(`num is 1`);
    }, 1500);
});

fetchNum
    .then(num => num * 2)
    .then(num => num * 3)
    .then(num => {
        console.log(num);
        return new Promise( (resolve, reject) => {
            setTimeout( ()=> resolve(num-1), 1500);
        });
    })
    .then(num => console.log(num));


var getHen = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('🐓'), 1000);
    });

var getEgg = hen =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${hen}=>🥚`), 1000);
    });

var cook = egg =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => 🥠`), 1000);
    });


getHen()
    .then(hen=>getEgg(hen))
    // .then(getEgg)
    .then(egg=>cook(egg))
    .then(meal => console.log(meal));



// getHen
//     .then((v) => {
//         console.log(v)
//         return getEgg
//                 .then((v)=>{
//                     console.log(v);
//                 })
//     });
