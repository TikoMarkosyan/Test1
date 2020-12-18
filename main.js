function polidrom(num){
    let num1 = num + "";
    if(!isNaN(num) && num1.length === 4){
        let newNum = num1.split("").reverse().join("")
        if(num === parseInt(newNum, 10)){
            return true
        }
        return false;
    }
    return false
}
console.log(polidrom(2112))
function nthPrime(n) {
    var P = 0;

    function isPrime(x) {
        var isPrime= true;

        for (var d = 2; d <= Math.sqrt(x); d++) {
            if((x/d) % 1 == 0) {
                isPrime = false;
                break;
            }
        }

        return isPrime;
    }

    for (var i = 1; 0 < n; i++) {

        if(isPrime(i)) {
            P = i; n--;
        }

        if(3 <= i){
            i++;
        }

    }

    return P;
}

console.log(nthPrime(5))



