function log (str)
{
    console.log(str);
}

log(calc('plus')(3,6));


function sortNumber(a,b){
    // 위의 예제와 비교해서 a와 b의 순서를 바꾸면 정렬순서가 반대가 된다.
    return b-a;
}
var numbers = [20, 10, 9,8,7,6,5,4,3,2,1];
log(numbers.sort(sortNumber));


function calc(mode) 
{
    var obj = 
    {
        'plus' :  function (a,b) {return a+b},
        'minus' : function (a,b) {return a-b}
    }
    
    debugger;
    return obj[mode];
}

function doSomething(add) {
    console.log(add);
    var r = add(11,5);
    console.log(r);
}

function add(a,b) {
    const sum = a+b;
    return sum;
}

doSomething(add);



function doSomething() {
    console.log(add);
    var r = add(11,5);
    console.log(r);
}

var add = function (a,b) {
    const sum = a+b;
    return sum;
}





function doSomething() {
    //debugger;
    console.log(add);
    var r = add(11,5);
    console.log(r);
}

doSomething();

var add = function (a,b) {
    const sum = a+b;
    return sum;
}


const e1 = {name : 'ellie'};

const e2={};

Object.assign(e2,e1);

console.log(e2);

e2.name = 'coder';

const e3 = Object.assign({},e1);


console.log('1');
setTimeout
(
    () =>
    {
        console.log('2');
    }
    , 1000
);
console.log('3');


function printRNow(prnt){
    prnt();
}

printRNow(()=>console.log('hello'));



var printWithDelay = (prnt, delMs) => {setTimeout(prnt(), delMs);};

printWithDelay(
    () => { console.log('Im sorry for late') }
    , 1000);
    console.log(()=>{console.log('bonjure')});
    
    
    var printWithDelay = (prnt, delMs) => setTimeout(prnt, delMs);
    
    printWithDelay(() => console.log('Im sorry for late'), 1000);
    console.log('are you ok?');
    
    
var printNo = function prnt() {
    console.log('><')
    setTimeout(printNo, 200);
}

(()=>console.log(3));









































