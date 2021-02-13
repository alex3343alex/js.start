document.getElementById("check").onclick = function(){
    let login = document.getElementById ("login").value;
    let password = document.getElementById ("password").value;
    if (login == "admin" && password == "pass123")
    alert (" Admin aithorized");
    else if ( password == "pass123")
    alert( "Welcome user ");
    else{
        alert ("wrong password")
    }
}