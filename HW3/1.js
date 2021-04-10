let n = 2;
while (n <= 100) {
    var prime = true;
    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            prime = false;
        }
    }
    if (prime) {
        console.log(n++);
    }
    n++
}
