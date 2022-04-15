

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

