window.onload = function () {

    document.getElementById("submit").disabled = true;

    let passwordMessage = document.getElementById("password-message");
    let passwordInput = document.getElementById("i_pass");
    let nameInput = document.getElementById("i_name");
    let aboutInput = document.getElementById("t_about");
    let passwordMessageItems = document.getElementsByClassName("password-message-item");
    let passwordIsCorrect = [false, false, false, false, false, false]

//? Placeholders logic
    passwordInput.addEventListener("focus", onPassFocusIn, true);
    passwordInput.addEventListener("blur", onPassFocusOut, true);

    function onPassFocusIn() {
        passwordInput.placeholder = 'Enter your password';
        passwordMessage.classList.add("visible");
        passwordMessage.classList.remove("hide");
    }

    function onPassFocusOut() {
        passwordInput.placeholder = '';
        passwordMessage.classList.remove("visible");
        passwordMessage.classList.add("hide");
    }

    nameInput.addEventListener("focus", onNameFocusIn, true);
    nameInput.addEventListener("blur", onNameFocusOut, true);

    function onNameFocusIn() {
        nameInput.placeholder = 'Enter your UPPERCASE name';
    }
    function onNameFocusOut() {
        nameInput.placeholder = '';
    }

    aboutInput.addEventListener("focus", onAboutFocusIn, true);
    aboutInput.addEventListener("blur", onAboutFocusOut, true);

    function onAboutFocusIn() {
        aboutInput.placeholder = 'Tell us about yourself';
    }

    function onAboutFocusOut() {
        aboutInput.placeholder = '';
    }

//? Inputs validation logic

    passwordInput.onkeyup = function () {

    //? Password validation logic
        // checking uppercase letters 
        let uppercaseRegex = /[A-Z]/g;
        if (passwordInput.value.match(uppercaseRegex)) {
            passwordMessageItems[1].classList.remove("invalid");
            passwordMessageItems[1].classList.add("valid");
            passwordIsCorrect[1] = true;
        } else {
            passwordMessageItems[1].classList.remove("valid");
            passwordMessageItems[1].classList.add("invalid");
            passwordIsCorrect[1] = false;
        }
        // 	// checking lowercase letters 
        let lowercaseRegex = /[a-z]/g;
        if (passwordInput.value.match(lowercaseRegex)) {
            passwordMessageItems[0].classList.remove("invalid");
            passwordMessageItems[0].classList.add("valid");
            passwordIsCorrect[0] = true;
        } else {
            passwordMessageItems[0].classList.remove("valid");
            passwordMessageItems[0].classList.add("invalid");
            passwordIsCorrect[0] = false;
        }

        // checking the number 
        let numbersRegex = /[0-9]/g;
        if (passwordInput.value.match(numbersRegex)) {
            passwordMessageItems[2].classList.remove("invalid");
            passwordMessageItems[2].classList.add("valid");
            passwordIsCorrect[2] = true;
        } else {
            passwordMessageItems[2].classList.remove("valid");
            passwordMessageItems[2].classList.add("invalid");
            passwordIsCorrect[2] = false;
        }

        // Checking length of the password 
        if (passwordInput.value.length >= 8) {
            passwordMessageItems[3].classList.remove("invalid");
            passwordMessageItems[3].classList.add("valid");
            passwordIsCorrect[3] = true;
        } else {
            passwordMessageItems[3].classList.remove("valid");
            passwordMessageItems[3].classList.add("invalid");
            passwordIsCorrect[3] = false;
        }
    //? Input validation logic
    passwordIsCorrect[4] = document.getElementById("i_name").checkValidity();
    passwordIsCorrect[5] = document.getElementById("i_pass").checkValidity();

    //? Submit button enable logic
        if (passwordIsCorrect.includes(false)) {
            document.getElementById("submit").disabled = true;
        } else {
            document.getElementById("submit").disabled = false;
        }
        console.log(passwordIsCorrect);
    }

};
