//1
T-D
x=5
y=5

output
5

//2
T-D
x=2,6
y=2,8
z=[2,2,5],[6,8,5]

output
[2,2,5],[2,2,5],[6,8,5]

//3
T-D
x=2
y=[2,2,5]
z=[2,2]

output
[2,2,5]

//4
T-D
x=[2,3,4,5]
b=true,
a=

output
true

//5
T-D
x=[1,2,3,4], [coding,coding,coding,coding]
i=1,2,3,4
x.length=4

output
[coding,coding,coding,coding]

//6
T-D
x=[5,7,-1,4],[5,coding,dojo,4]
i=1
x.length=4

output
[5,coding,dojo,4]

//7
T-D
x=[5,10]
a=
b=10

output
10

//8
T-D
sum=0
x=
i=0
x.length=undefine

output
undefine

//part2
//1
function printAverage(x){
   	var sum = 0;
   	// your code here
   	let avg;
   	var y;
	for(var i=0; i<x.length; i++){
		sum += x[i];
	}
	avg=sum/x.length;
	console.log(avg);
}

y = printAverage([1,2,3]);
console.log(y); // should log 2
  
y = printAverage([2,5,8]);
console.log(y); // should log 5

//2
function returnOddArray(){
   // your code here
   var oddArr=[]
   for(var i=1; i<256; i++){
	   	if(i%2 == 1){
	   		oddArr.push(i);
	   	}
   }
   return oddArr;
}
y = returnOddArray();
console.log(y); // should log [1,3,5,...,253,255]

//3
function squareValue(x){
   // your code here
   for(var i=0; i<x.length; i++){
   		x[i]=x[i]*x[i];
   }
   return x;
}

y = squareValue([1,2,3]);
console.log(y); // should log [1,4,9]
  
y = squareValue([2,5,8]);
console.log(y); // should log [4,25,64]














