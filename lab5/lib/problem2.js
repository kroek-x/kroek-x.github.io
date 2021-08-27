function readInput(){
    var getInput = prompt("Enter a positive integer");
    return getInput;
}

function displayStats(list) {
    var avg = (list[0] == 0 ? 0 : Math.round (avgArray(list) * 100) / 100);
    var min = (list[0] == 0 ? 0 : Math.min.apply(Math,list));
    var max = (list[0] == 0 ? 0 : Math.max.apply(Math,list));
    alert("For the list " + list + " the average is " + avg + " the minimum is " + min + ", and the maximum is " + max );
}

function findMaxMin(arr) {
    var max = Math.max(arr);
    var min = Math.min(arr);
    return max,min;
}

function sumArray(arr){
    var sum = 0;
    for(var i = 0 ; i < arr.length ; i++){
        sum += arr[i];
    }
    return sum;
}

function avgArray(arr) {
    const average = (array) => array.reduce((a, b) => a + b) / array.length;
    return average(arr);
}