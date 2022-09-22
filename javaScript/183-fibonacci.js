function fibonacciGenerator (n) {
//Do NOT change any of the code above 👆
    
    //Write your code here:
    var lis = [];
    for (var i = 0; i < n; i++) {
        if (i <= 1) {
            lis.push(i);
        }
        else {
            lis.push(lis[i-1]+lis[i-2]);
        }
    }
    console.log(lis);
    //Return an array of fibonacci numbers starting from 0.
    
//Do NOT change any of the code below 👇
}
