// //Match function

// let stri="I have a dog in my house but i also want to have a cat."
// let regex=/\w+\s/g
// console.log(regex.exec(stri));
// console.log(stri.match(regex));


// //Search Function--> returns index of first match if not returns -1

// let strig="I have a good habit of brusshing teeth daily each 7 day of the weeek."

// // let strig="I have a good habit of brusshing teeth daily each day of the weeek."
// let reg=/\d/;
// console.log(strig.search(reg));


// //Replace function --> returns new replaced string with all new replacement made in pattern
// console.log(strig.replace(reg,"everyday"))

// let stat="We have registered 8 cases of commoncold and 3 cases of serious flu."
// let regg=/\d/;
// console.log(stat.replace(regg,"numerous")); // only replaces 9 not 13.



// let stati="We have registered 8 cases of commoncold and 3 cases of serious flu."
// let reggi=/\d/g;

// console.log(stati.replace(reggi,"numerous"));// replaces both 8 and 3.


// let data="everyone love rose and rose has many colours also different colour signifies special mean*ing- rofsdgffse";
// let regexp=/rose/g;
// regexp=/^ever/g; //starts with
// regexp=/rose$/g; // ends with
// regexp=/r.se/g // matches anyone character(only one)
// regexp=/r*se/g // matches 0 or more character.
// regexp=/ro?see?/ //? after a character means that character is optional.
// regexp=/\*/ // espaces the special chaarcter to normal literal
// let result= regexp.exec(data);

// console.log("The result from (.exec) is:",result);

// if(regexp.test(data)){
//     console.log(`The string ${data} matches the expression ${regexp.source}`);

// }
// else{
//     console.log(`The string:- ${data} doesnot matches the expression --> ${regexp.source}`);

// }

 
// Character Sets --> []

// const min= "Carry3 is vary 9?"
// let reguexp=/C[a-z]rry/;
// reguexp=/C[aty]rry/;//can be a t and y
// reguexp=/C[^aty]rr[yu]/;// not a t and y
// reguexp=/[a-zA-Z]rry/;
// reguexp=/[0-9]/;
// reguexp=/\?/
// console.log(reguexp.exec(min))

// if(reguexp.test(min)){
//     console.log(`The string ${min} matches the expression ${reguexp.source}`);

// }
// else{
//     console.log(`The string:- ${min} doesnot matches the expression --> ${reguexp.source}`);

// }

// // Quantifiers --> {}
// const mini="larry page"
// const regulari=/lar{0,2}y/;// r can occur 0 to 2 times
// const result1=regulari.exec(mini)

// console.log("The result from (.exec) is:",result1);

// if(reguexp.test(mini)){
//     console.log(`The string ${mini} matches the expression ${regulari.source}`);

// }
// else{
//     console.log(`The string:- ${mini} doesnot matches the expression --> ${regulari.source}`);

// }

// //Grouping -->()

// const mono="harhar1r2r mahadev";
// const rego=/(har){2}([0-9]r){2}/;

// const result2=rego.exec(mono)

// console.log("The result from (.exec) is:",result2);

// if(rego.test(mono)){
//     console.log(`The string ${mono} matches the expression ${rego.source}`);

// }
// else{
//     console.log(`The string:- ${mono} doesnot matches the expression --> ${rego.source}`);

// }





