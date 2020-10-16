// var d = new Date ();
// var weekday = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
// console.log(weekday);
// var n = weekday[d.getDay()];


function myFunction() {
    var d = new Date();
    var weekday = new Array(7);
        weekday[0] = "Sunday"; 
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday"; 
        weekday[4] = "Thursday";
        weekday[5] = "Friday"; 
        weekday[6] = "Saturday"; 
    
    var n = weekday[d.getDay()];
    document.getElementById("weekday").innerHTML = n;
    console.log(weekday);
}
    
    // var n = weekday[d.getDay()];
    
// function myFunction() {
//     var d = new Date();
//     var weekday = d.getDay();
//     document.getElementById("weekday").innerHTML = d.getDay();
// }
// console.log(d.getDay());


    // var weekday = ""

    // switch(d.getDay()) {
    //     case 1:
    //         weekday="Monday";
    //     case 2:
    //         weekday="Tuesday";
    //     case 3:
    //         weekday="Wednesday";
    //     case 4:
    //         weekday="Thursday";
    //     case 5:
    //         weekday="Friday";
    //     case 6:
    //         weekday="Saturday";
    //     case 7:
    //         weekday="Sunday"; 

    //  document.getElementById("weekday").innerHTML = d.getDay[1];

    // function myFunction() 
    
    // }

// myFunction()
// weekday.shift()

