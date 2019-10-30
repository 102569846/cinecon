/**
 * Author: Jess Rubino 102111467 + Elvis 102569864
 * Target: Sign.html
 * Purpse: Dev project
 * Created: 16/10/2019
 * Last Updated: 
 */

"use strict"; 



$(document).ready(function()
{
    
    //Signup logic
    $('#signup').submit(function(event){
        var alias = $('#username').val();
        var pass = $('#password').val();

        event.preventDefault();

        localStorage.setItem(alias, pass);

        alert('Sign up successful!\nYou will now be taken to the login page once you close this prompt.')
        setTimeout(function(){
            location.replace("Login.html")
        }, 500);
        //implement an if user exists, choose different name
    
    });

    //Login code
    $('#sign_in').submit(function(event){
        var alias = $('#username').val();
        var pass = $('#password').val();

        event.preventDefault();

        if (localStorage.getItem(alias) != null) {
            if (localStorage.getItem(alias) == pass) {
                
                localStorage.setItem("CurrentUser", alias)

                alert('Login successful!\nYou will now be taken to the home page once you close this prompt.')
                setTimeout(function(){
                    location.replace("index.html")
                }, 500);
            } else {
                $('#nouser').css("display","block")
            }
        }
        else {
            $('#nouser').css("display","block")
        }
    });
});



// function validate()
// {
//     var result = true;

//     if (!$('#email').match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/))  {
//         document.getElementById("err_email").textContent = "Please enter a valid email address.\n";
//         result = false;
//     }

//     if (!$('#user').match(/[a-zA-z0-9_-]/)) {
//         document.getElementById("err_user").textContent = "Please enter a valid username.\n";
//         result = false;
//     }

//     if (!$('#password').match(/[a-zA-z0-9]/)) {
//         document.getElementById("err_pass").textContent = "Please enter a valid password.\n";
//         result = false;
//     }

//     if (!$('#confirm').match(/[a-zA-z0-9]/)) {
//         document.getElementById("err_confirm").textContent = "Please enter a valid password confirmation.\n";
//         result = false;
//     }

//     else if ($('#password') != $('#confirm')) {
//         document.getElementById("err_confirm").textContent = "Your passwords do not match.\n";
//         result = false;
//     }

//     if (result == true) {
//         signup;
//         alert("Sign up succesful!")
//     }
// }

// function signup()
// {
//     $('#signup').submit(function(event){

//         event.preventDefault();
        
//         var alias = $('#username').val();
//         var pass = $('#password').val();

//         localStorage.setItem(alias, pass);
//         //implement an if user exists, choose different name

//     });
// }

// $('#signup').submit(function(event){

//     event.preventDefault();

//     var result = true;

//     if (!$('#email').match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/))  {
//         document.getElementById("err_email").textContent = "Please enter a valid email address.\n";
//         console.log("Please enter a valid email address.\n")
//         result = false;
//     }

//     if (!$('#user').match(/[a-zA-z0-9_-]/)) {
//         document.getElementById("err_user").textContent = "Please enter a valid username.\n";
//         console.log("Please enter a valid username.\n")
//         result = false;
//     }

//     if (!$('#password').match(/[a-zA-z0-9]/)) {
//         document.getElementById("err_pass").textContent = "Please enter a valid password.\n";
//         console.log("Please enter a valid password..\n")
//         result = false;
//     }

//     if (!$('#confirm').match(/[a-zA-z0-9]/)) {
//         document.getElementById("err_confirm").textContent = "Please enter a valid password confirmation.\n";
//         console.log("Please enter a valid password confirmation.\n")
//         result = false;
//     }

//     else if ($('#password') != $('#confirm')) {
//         document.getElementById("err_confirm").textContent = "Your passwords do not match.\n";
//         console.log("Your passwords do not match.\n")
//         result = false;
//     }

//     if (result == true) {
//         var alias = $('#username').val();
//         var pass = $('#password').val();
//         localStorage.setItem(alias, pass);

//         alert("Sign up succesful!")
//     }
//     //implement an if user exists, choose different name
// }); Validation code can be implemented if time allows
