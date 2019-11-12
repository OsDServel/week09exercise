// var myArr = ["one", "two", "three", "four", "five"];

// console.log(myArr.length);


// //5
// for(i=0; i<myArr.length; i++){
// 	console.log(myArr[i].length)
// }

// //6
// // var reverseArr = myArr.reverse();
// // console.log(reverseArr);

// //7
// // var empty = [""]{
// // 	console.log.push("one")
// // }

// var empty = myArr;

//4.

// var myString= prompt('What is your name?');
// var myString= 'Evan Winston';

var myArr= ['Where', 'is', 'my', 'mind', '?'];
// console.log(myArr.length);

//NOTE: be wary of the <= signs in for loops, as they may add, "undefined" strings back because the length is incorrect, instead just have a < or > syntax to avoid errors.
// for (var i= 0; i< myArr.length; i= i+ 1) {
// 	console.log(myArr[i]);   //log sting indexes
// }

// for (var i= 0; i< myArr.length; i= i+ 1) {
// 	console.log(myArr[i].length);	//log string indexes lengths	
// }

// for (var i= 0; i< myString.length; i++) {
// 	console.log(myString[i]);
// }
// for (var i= 0; i< 100; i= i+ 1){
// 	console.log(i +1)    //
// }

//NOTE: logging only even numbers
// for (var i= 0; i< 100; i++) {
// 	if(i% 2 == 0){ // IF, index, divided by 2 = 0, then 'i' is EVEN and meet the parameters to be logged
// 		console.log(i)
// 	}
// }

//6.

// var reverseArr= myArr.reverse();
// console.log(reverseArr);

//7.
//array methods
function copyArray(arr){
	var copy= [];
	for(var i= 0; i< arr.length; i++){
		copy.push(arr[i]);
	};
	return copy;
}

// var fruit= ['apple', 'banana', 'kiwi'];
// var fruitCopy= copyArray(fruit);

var arrCopy= copyArray(myArr);
//now reverse the copied array

var revArr= arrCopy.reverse();







//8.

var alpArr= revArr.sort();

var same= myArr.sort();






//9.
var numArr= [56, 89, 23, 42, 76]
//NOTE: i have to copy an arr before working on it. otherwise when sort or reversing the original array will be affected
var numCopy= copyArray(numArr);

//numArr sorted in ascending order
var numSortAsc= numCopy.sort();

//numArr sorted in descending order
	//NOTE: i made a copy first because 
var newCopy= copyArray(numSortAsc);
var numSortDes= newCopy.reverse();

// var numSortDescopy= numSortAsc.reverse();








//10.
//string array
var strArr= ['hello', 'pupusas', ' La mara'];



//11.
//im adding, or pushing two more string to the end of the arr
strArr.push('money', 'powuh');





//12.
//im removing the first string in the array
strArr.shift();










//13.

var emptyArr= [];

function entListItem(){
	var item= document.getElementById('userInput').value;

	var element= document.createElement('li');
	var text= document.createTextNode(item);
	element.appendChild(text);

	// emptyArr.push(element);

	document.getElementById('myList').appendChild(element)

}