var a="Hello all good morning";                          //1st
console.log(a.slice(10,14).toUpperCase());

console.log("--------------------------------------");

var b="bindu";                                            //2nd  
console.log(b.toUpperCase());
console.log(b.length);

console.log("---------------------------------------");

var c="hima";                                             //3rd
console.log(c.charAt(2));
console.log(c.charCodeAt(2));

console.log("---------------------------------------");

var d="      pawankalyan      ";                           //4th
console.log(d.trim().slice(2,5));

console.log("---------------------------------------");

var e="Hima";                                             //5th
var e1="BiNDu";
lowcase=e1.toLowerCase();
console.log(e.concat(" ",lowcase));

console.log("---------------------------------------");

var f="     HHHii Everyone     ";                          //6th
ftrim=f.trim();
console.log(ftrim.slice(2));

console.log("---------------------------------------");

var g="bindu";                                               //7th
exchar=g.charAt(1);
console.log(exchar.toUpperCase());

console.log("---------------------------------------");

var h="     Hope you are     ";                            //8th
htrim=h.trim();
var i="all fine";
console.log(htrim.concat(" ",i));

console.log("---------------------------------------");
let input = "   HelloWorld   ";                            //9th
inputrim=input.trim().toUpperCase();
console.log(inputrim.slice(2,6));

console.log("---------------------------------------");

let string1 = "HELLO";                                      //10th
let string2 = "WORLD";
conct=string1.toLowerCase() + " " +string2.toLowerCase();       
console.log(conct.charAt(0));


