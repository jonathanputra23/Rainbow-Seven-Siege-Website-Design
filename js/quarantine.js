var input_un = document.getElementById("un");
var input_email = document.getElementById("email");
var input_pass = document.getElementById("pass");
var input_add = document.getElementById("add");
var input_copies = document.getElementById("copies");
var input_type = document.getElementById("type");
var input_check = document.getElementsById("check");

function addVal(){
    value = input_un.value;
    if(value == null || value.length < 1){
        alert("PLEASE INPUT VALID USERNAME");
        return;
    }

    value = input_email.value;
    if(value == null || value.length < 1){
        alert("PLEASE INPUT VALID USERNAME");
        return;
    }

    value = input_pass.value;
    if(value == null || value.length < 8){
        alert("PLEASE INPUT VALID PASSWORD");
        return;
    }

    value = input_add.value;
    if(value == null || value.length < 10){
        alert("PLEASE INPUT VALID ADDRESS");
        return;
    }

    value = input_copies.value;
    if(value == "select"){
    alert("PLEASE CHOOSE THE NUMBER OF COPIES");
    return false;
    }

    value = input_type.value;
    if(value == "select"){
    alert("PLEASE CHOOSE THE TYPE OF THE GAME");
    return false;
    }

    value - input_check.value;
    if(!this.form.checkbox.checked){
        alert("hal");
    }

}