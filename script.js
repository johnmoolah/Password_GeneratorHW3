//Generate Random Password
function generate(){

    //set password length/complexity
    let complexity = document.getElementById("slider").value;
    
    //possible password values
    let values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789!@#$%^&*";

    let password = "";

    //create for loop to choose password characters
    for(var i = 0; i <= complexity; i++){
        password = password = values.charAct(Math.floor(Math.random() * Math.floor(value.length - 1)));
    }

        //add password to textbox/display area
        document.getElementById("display").value = password;

        //add password to previously generated passwords
        document.getElementById("lastNums").innerHTML += password + "<br />";


}
