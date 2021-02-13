function checkNum(N) {
    if (N > 0) {
       return "Number is Pos";
    } else if (N < 0) {
        return "number is Neg";
    } else {
        return "Number is 0";
    }
}
function run() {
    val = parseInt(document.getElementById("val").value);
    let msg =  checkNum(val);
    console.log(msg)
    document.getElementById("massage").innerHTML = msg;
}
