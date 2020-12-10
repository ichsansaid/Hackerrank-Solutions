function compareTriplets(a, b) {
    let sum = [0,0];
    for(let i = 0; i < a.length; i++){
        if(a[i] != b[i]) (a[i] > b[i]) ? sum[0]++:sum[1]++;
    }
    return sum;
}
