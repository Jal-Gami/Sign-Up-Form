function myFun1(){
    var a = document.myForm1.Email.value;
    var b = document.myForm1.Password.value;

    if((a.indexOf('@')<=0) && (a.length<3)){
        document.getElementById("message1").innerHTML="Invalid Email, need more than 3 char."
        document.getElementById("message2").innerHTML="Invalid Password, need more than 8 and less than 20 char."
        alert("Invalid Form Data.")
        return false;
    }
    else if(b.length<8){
        document.getElementById("message1").innerHTML="Invalid Email, need more than 3 char."
        document.getElementById("message2").innerHTML="Invalid Password, need more than 8 and less than 20 char."
        alert("Invalid Form Data.")
        return false;
    }
    else{
        document.getElementById("message3").innerHTML="All good to go."
        alert("Valid Form Data.")
        return true;
    }
}