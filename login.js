document.getElementById("submit-button").addEventListener("click", function () {
    // console.log("button click ");
    // get email 
    const emailfield = document.getElementById("user-email");
    const useremail = emailfield.value;  // value dela ami ki user-mail ar modda ki  detace aita dakaba 
    // console.log(useremail);
    // get password 
    const passwordField = document.getElementById("user-password");
    const userPassword = passwordField.value;  // value dela ami ki password detace aita dakaba 
    // console.log(userPassword);
    if (useremail == "jonikumardas1@gmail.com" && userPassword == "joni184732") {
        // console.log("you are valid parson");

        window.location.href = "index.html";         // komo akta web site ar page ar link korata aita bebohar kora hoy 
    } else {
        alert("please enter valid mail and password!");
    }

    
})
