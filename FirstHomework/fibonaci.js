function PrintFinNumbers() {
    const result = []; // 1 2
    for (let i = 1; i < 100; i++) {
        if (result[result.length - 1]) {
            if (result[result.length - 2]) {
                result.push(result[result.length - 1] + result[result.length - 2]);
            } else {
                result.push(result[result.length - 1] + result[result.length - 1]);
            }
        } else {
            result.push(i);
        }
    }

    console.table(result);
    document.getElementById("arrFibonaci").innerHTML = result;
}
/// 1 2 3 4 5 6 7 8 9 10



/// 1 2 3 5 8 13 21