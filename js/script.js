function updateContryView() {
    var country = document.getElementById("ddCountry");
    var divcountry = document.getElementById("divCountry");

    if (country.value == "Yes") {
        divcountry.classList.remove("invisible");
    }
    else {
        divcountry.classList.add("invisible");
    }
}

function validateForm() {
    var DoB = document.querySelector("#dob");
    var divDoBError = document.querySelector("#divDoBError")
    var formIsValid = true;

    if (DoB.value == "") {
        /*show error message*/
        divDoBError.classList.remove("invisible");
        divDoBError.innerHTML = "The Date of Birth cannot be empty"
        DoB.classList.add("hasError");

        formIsValid = false;

    } else {
        var DoBDate = new Date(DoB.value);
        var todayDate = new Date();
        if (DoBDate >= todayDate) {
            /* show error message */
            divDoBError.classList.remove("invisible");
            divDoBError.innerHTML = "The Date of Birth must be before todays date"
            DoB.classList.add("hasError");
            formIsValid = false;

        } else {
            divDoBError.classList.add("invisible");
            divDoBError.innerHTML = ""
            DoB.classList.remove("hasError");
        }
    }

 var countrySelection = document.querySelector("#ddCountry");
 var divCountryError = document.querySelector("#divCountryError");
 var divCountry = document.querySelector("#divCountry");
 var txtCountry = document.querySelector("#txtTravel");

 if(countrySelection.value == "Yes"){
     
     if(txtCountry.value == ""){
        divCountry.classList.remove("invisible");
        txtCountry.classList.remove("invisible");
        divCountryError.classList.remove("invisible");
        
        divCountryError.innerHTML = "Field cannot be empty"
        txtCountry.classList.add("hasError");
        formIsValid = false;
     }else{
        divCountryError.classList.add("invisible");
        divCountryError.innerHTML = ""
        countrySelection.classList.remove("hasError");
        formIsValid = true;
     }
     
 }

 var elements = document.getElementsByTagName("input");
 var invalidChars = ['#', '!', '~', '&', '<', '>', '`', '"'];
 for(let i=0; i<elements.length; i++){
     for(let j=0; j < invalidChars.length; j++){
         if(elements[i].value.indexOf(invalidChars[j]) != -1){
             elements[i].classList.add("hasError");
             alert("That is not a valid character. Try again.");
             formIsValid = false;
         }
     }
 }

    return formIsValid;
}