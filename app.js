console.log ('Hello');

const button1=document.querySelector("#button1");
const button2=document.querySelector("#button2");
const button3=document.querySelector("#button3");
const button4=document.querySelector("#button4");
const button5=document.querySelector("#button5");
const button6=document.querySelector("#button6");
const button7=document.querySelector("#button7");
const button8=document.querySelector("#button8");
const button9=document.querySelector("#button9");
const button0=document.querySelector("#button0");
const button11=document.querySelector("#button11");
const testbtn=document.querySelector("#testbtn");

let day1= 2
let day2= 9
let month1= 0
let month2= 9
let year1=1
let year2=9
let year3=9
let year4=8

console.log(day1,day2,month1,month2,year1,year2,year3,year4)



let c1 = day1+ day2+ month1 + month2 + year1 + year2+ year3 + year4


if (year1 < 2) {

const a=2;
let c2=c1-a;
let b1= (c1%10); // остаток от деления
let b3 = (c1-b1);
let b6 = (b3/10)
let b4= b1+b6;
let d1= (c2%10); 
let d3 = (c2-d1);
let d6 = (d3/10);
let d4= d1+d6;

console.log ( b6, b1, b4, d6, d1, d4)


} else {
    
const a=19;
let f2=c1+a;
let g1= (c1%10); 
let g3 = (c1-g1);
let g6 = (g3/10);
let g4= g1+g6;
let e1= (f2%10); 
let e3 = (f2-e1);
let e6 = (e3/10);
let e4= e1+e6 ;

console.log ( g6, g1, g4, e6, e1,e4)

}
button1.addEventListener("click", function() {
console.log("1")
})
button2.addEventListener("click", function() {
    console.log("2")
    })


button3.addEventListener("click", function() {
    console.log("3")
    })

    button4.addEventListener("click", function() {
        console.log("4")
        })
        button5.addEventListener("click", function() {
            console.log("5")
            })
            button6.addEventListener("click", function() {
                console.log("6")
                })
                button7.addEventListener("click", function() {
                    console.log("7")
                    })
                    button8.addEventListener("click", function() {
                        console.log("8")
                        })
                        button9.addEventListener("click", function() {
                            console.log("9")
                            })
                            button0.addEventListener("click", function() {
                                console.log("0")
                                })
                                button11.addEventListener("click", function() {
                                    console.log("11")
                                    })
                                  

