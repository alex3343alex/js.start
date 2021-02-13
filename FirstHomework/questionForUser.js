function myFunction() {
    var x, text;

    x = document.getElementById("numb");

    do {
        if (x.value == 10) {
            text = "Input OK";
            document.getElementById("btn").disabled = true;
        } else {
            text = "Input not valid, try once more";
            x.value = null;
        }
        console.log(text)
        console.log(x.value)
        document.getElementById("demo").innerHTML = text;
    } while (parseInt(x.value) && parseInt(x.value) != 10);

    PrintFinNumbers();
}