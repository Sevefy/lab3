function checkpass(){
    var x = document.getElementById("inputpass");
    var y = document.getElementById("check");
    if(x.value===y.value)
    {alert("успешно");console.log("успешно"); 
    window.location.href="index.html";return true}
    else
    {alert("уважаемый, Вы не правы!");console.log("уважаемый, Вы не правы!");
     return false}
}
