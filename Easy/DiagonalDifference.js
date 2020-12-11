function diagonalDifference(arr) {
    // Write your code here
    let result = 0;
    for(let i = 0; i < arr.length; i++){
        result+=arr[i][i];
        result-=arr[arr.length - 1 - i][i];
    }
    return Math.abs(result);
}
