
// function sayHello() {
//     document.write("Hej på dig")
// }
// console.log(sayHello)

// var words = "This is ";
// var moreWords = "a sentence";
// var sentence = words + moreWords;
// document.write(sentence);
// console.log(sentence)

// var alpha="ABCDEFG";
// // var length=alpha.length;
// // document.write(length);
// var result=alpha.substring(3,5);
// document.write(result);

// function sayHey(who) {
//     document.write("Hej hopp på dig, " + who);
// }
// console.log(sayHey)

// var num1 = 5;
// var num2 = 3;
// // var total = num1 + num2;
// // document.write(total);
// // totalen blir 8
// var total = ++num1;
// document.write(total);
// //totalen blir 6

// var a="jake";
//     if(a=="Susan") {
//         alert(a);
//     } else {
//         alert("Du är inte rätt person");
//     }

// for(i=0; i<5; i++) {
//     document.write("This is a iteration " + i + "<br>");
// }

// var d = new Date();
// document.getElementById("demo").innerHTML = d.getDay();

function myFunction() {
    var list = document.getElementsByClassName("example") [0];
    list.getElementsByClassName("child")[0].innerHTML = "Milk";
}