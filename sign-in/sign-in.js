let inputemail = document.querySelector('#email');
let inputpassword = document.querySelector('#password');
let check = document.querySelector('#check');
let validate = 1;


function validation(){
    if(inputemail.value == ''){
document.querySelector('.error').innerHTML = "Please enter a valid email address or phone number."
validate = 0;
    }else{
        document.querySelector('.error').innerHTML = "";
validate = 1;
    }
    if(inputpassword.value == ''){
document.querySelector('.passerror').innerHTML = "Your password must contain between 4 and 60 characters."
validate = 0;
    }else{
        document.querySelector('.passerror').innerHTML = ""
validate = 1;
    }

    if(validate){
return true
    }else{
return false
    }
}



