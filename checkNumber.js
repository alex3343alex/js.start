function checkNum(N){
    if (N > 0){
        console.log("Number is Pos");
    }else if (N < 0) {
        console.log("number is Neg")
    }else {
        console.log("Number is 0" )
    }
}
    function run(){
        val = document.getElementById("val").value;
        document.getElementById("massage").innerHTML=+": "+checkNum(val)
        }
