/* ----- */
// Replace YOUR NAME with yours

var NAME = "Sydney";
console.log( "/*****************/\n" + NAME +"'s submission \nfor Whodat Assignment" + "\n/*****************/\n");



/*
 * CHALLENGES
 *
 * Complete as many of the following challenges 
 * that you can. Simply put your code where indicated
 * and when you have completed a challenge
 * the delete the not in the 'not completed' message
 * if you try and don't get it then change the log message to 
 * something else. (e.g. 'attempted', 'attempted but javascript stinks', 
 * 'attempted but the instructor stinks', ...)
 */




/* -=-=-=-			=-=-=-=-=			-=-=-= 	*/
/*  Ch1											*/	
/*	Change the color of the wings on  			*/	
/*	1st owl to a different color				*/	
/* -=-=-=-			=-=-=-=-=			-=-=-= 	*/


//paste your code here...and delete
console.log('...challenge 1...');
console.log('\tsuccess! with help in class but whatever')


var myResult = document.getElementsByClassName('wing_L');
myResult[0].setAttribute("style", "background-color: pink");

var myResultRight = document.getElementsByClassName('wing_R');
myResultRight[0].setAttribute("style", "background-color: deeppink");



/* -=-=-=-			=-=-=-=-=			-=-=-= 	*/
/*  Ch2											*/	
/*	Change the background color of the cage  	*/	
/*	on the 1st row at the end					*/	
/* -=-=-=-			=-=-=-=-=			-=-=-= 	*/

console.log('...challenge 2...');
console.log('\tsuccess! help in class, major key')
//paste your code here...

var cageList = document.getElementsByClassName('cage  column-4');
cageList[2].setAttribute("style", "background-color: aqua");




/* -=-=-=-			=-=-=-=-=			-=-=-= 	*/
/*  Ch3											*/	
/*	Change the length of the beak for the owl	*/	
/*	at the end of the second row				*/	
/* -=-=-=-			=-=-=-=-=			-=-=-= 	*/

/** 		HINT		 **/
// to change the length of the beak you need to change
// the pixel value of:
// border-top
// e.g.
// changing:
// border-top: 60px solid goldenrod;
// to
// border-top: 120px solid goldenrod;
// would double the length of the beak.
/** ---		----	---	 **/

console.log('...challenge 3...');
console.log('\tsuccess! ~i get byyyy with a little help from my friends~')
//paste your code here...

var beak = document.querySelector("#container > div:nth-child(2) > div:nth-child(3) > section.beak").setAttribute("style", "border-top: 45px solid lightgreen");



/* -=-=-=-			=-=-=-=-=			-=-=-= 	*/
/*  Ch4											*/	
/*	Write a function that takes a number		*/	
/*  and returns the cage on the page that 		*/
/* 	corresponds to that number 					*/
/* 		e.g. calling 							*/
/*				getCage(0)						*/
/*		would return <section class="cage" ...	*/
/*					 </section>					*/
/*												*/					
/*				html Tag for the first cage     */					
/* -=-=-=-			=-=-=-=-=			-=-=-= 	*/
console.log('...challenge 4...');
console.log('\tsuccess! tgod 4 class...')
function getCage(cageNumber) {
	var res = document.getElementsByClassName('cage')[cageNumber]; 
	return res;
}
console.log("This is a test of my function...I am gonna get the 4th cage...");
var myTestCage = getCage(3);
console.log(myTestCage);
	





/* -=-=-=-			=-=-=-=-=			-=-=-= 	*/
/*  Ch5											*/	
/*	Change the colors of the cages and owls		*/	
/*	in the middle column to be the same			*/
/*												*/	
/*												*/	
/*  HINTkey: "value", 							*/
/*  If you got Ch4 then you should be able to 	*/
/* 	you should be able to use that function to 	*/
/*	assist you 									*/
/* -=-=-=-			=-=-=-=-=			-=-=-= 	*/
console.log('...challenge 5...');
console.log('\tsuccess! WHY IS THIS SO EASY IN CLASS??')
//paste your code here...

getCage(1).setAttribute("style", "background-color: lightgreen");

getCage(4).setAttribute("style", "background-color: lightgreen");


/* -=-=-=-			=-=-=-=-=			-=-=-= 	*/
/*  Ch6											*/	
/*	Write functions that take an owl element	*/	
/* 	as an argument and return the html sections */
/*	of different body parts						*/
/*												*/	
/*	see functions below for hints				*/	
/*												*/	
/* -=-=-=-			=-=-=-=-=			-=-=-= 	*/
console.log('...challenge 6...');
console.log('\tattempted but how do you specify the owl of which you want to get the wings?? slash how do you return BOTH wings in one piece?? #IamNotaMagician')
//paste your code here...

/* function getCage(cageNumber){
	var res = document.getElementsByClassName('cageNumber'); 
	return res;
}

function getOwlPart(cageNumber, bodyPart){
	var cage = getCage(cageNumber); 
	var result = cage.querySelector("." + bodyPart); 
	return result;
}

function getWings(anOwl) {
	var result_L = getOwlPart(anOwl, 'wing_L'); 
	var result_R = getOwlPart(anOwl, 'wing_R');
	var result = [ result_L, result_R];
	return result; 
}

function getBeak(anOwl) {
	var beak = getOwlPart(anOwl, 'beak');
	return beak;
}

function getEyes(anOwl) {
	var result_L = getOwlPart(anOwl, 'eye_L');
	var result_R = getOwlPart(anOwl, 'eye_R');
	var eyes = [result_L, result_R];
	return eyes;
}

function getBody(anOwl) {
	var body = getOwlPart(anOwl, 'body prpl-d4');
	return body;
}

function getPupils(anOwl) {
	var result_L = getOwlPart(anOwl, );
	var result_R = getOwlPart(anOwl, );
	var pupils = [result_L, result_R];
	return pupils = ;
} */



