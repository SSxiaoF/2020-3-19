function giao(word,name ){
    console.log (name + " " + word );
}
giao('你好' , '老八');



function fff(x,y ){
    console.log (x+y);
}
fff(2,5);




function swap(x,y){
    let temp;
    temp = x;
    x=y
    y=temp
    console.log(x,y)
}
swap(10,20)

/*x把10赋值给了temp，temp为10，y把20赋值给了x，x为20，temp又把10赋值给了y，y为10；
答案：console.log(20,10)
*/


let result;
function add(x,y){
    return x+y
}
result=add(3,5)
console.log(result*result/2)

result=Math.random();
console.log(result)




function clunk(times){
    let num =times;
    while (num>0){
        display("clunk");
        num=num-1;
    }
}

function thingamajig(size){
    let facky =1;
    if (size==0){
        display("clank");
    }else if (size==1){
        display("thunk");
    }else{
        while (size>1){
            facky =facky*size;
            size=size-1;
        }
        clunk(facky);
    }
}

function display(output){
    console.log(output);
    clunkCounter=clunkCounter+1;
}

let clunkCounter=0;
thingamajig(5);
console.log(clunkCounter);


//let balance =10500
//let cameraOn=true

//function steal(balance, amount){
//    cameraOn =false
//    if(amount<balance){
//        balance=balance-amount
//    }
//    return amount
//    cameraOn = true
//}
//let amount=steal(balance, 1250)
//alert("Criminal:you stole"+amount+"!")



//let a =prompt("请输入第一个值");
//let b =prompt("请输入第二个值");
//let tipEn ="";
//let tipCn ="";
//function max(number1,number2){
//    if(number1>number2){
//        return number1
//    }else{
//        return number2
//    }
//}
//tipEn =max(a,b) + " is bigger"
//tipCn =max(a,b) + "更大"
//alert =(tipEn);