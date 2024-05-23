/**@type {HTMLFormElement} */
let form = document.getElementById("register-form")

form.addEventListener("submit",function(e){
    e.preventDefault()
    //min 8 character dan min 2 kata
    let first_name=document.getElementById("first-name")
    let last_name=document.getElementById("last-name")
    
    //ends with '@gmail.com'
    let email=document.getElementById("email")

    //not empty
    let gender=form.gender
    
    //not empty
    let errorText=document.getElementById("error-txt")

    //not empty
    let address=document.getElementById("address")

    // Set error message to empty initially
    errorText.innerText = "";

    // Validate username
    if (first_name.value.length < 8 ) {
        errorText.innerText = "First name must be at least 8 characters long";
        return;
    }
    else if(first_name.value.charAt(0) === first_name.value.charAt(0).toLowerCase()){
        errorText.innerText="first letter of first name must be capital."
        return;
    }
    else if(last_name.value.charAt(0) === last_name.value.charAt(0).toLowerCase()){
        errorText.innerText="first letter of last name must be capital."
        return;
    }
    else if(last_name.value.length<4){
        errorText.innerText="Last name must be at least 8 character long"
        return;
    }
    else if(!email.value.endsWith("@ZenDragon.com")){
        errorText.innerText="email must be ended with @ZenDragon.com"
        return;
    }
    else if(gender.value==""||gender.value==undefined){
        errorText.innerText="gender must be selected"
        return
    }
    else if(!validateAdress(address.value)){
        errorText.innerText="Address must at least 1 alphabet and 1 digit"
        return
    }
    alert("register success")
    window.open("/dragon page/coding/dragon.html","_blank")
})

function validateAdress(input){
    let containDigits=false
    let containAlphabet=false

    for(let i=0;i<input.length;i++){
        const c=input[i]
        if(c>='0' &&c<='9'){
            containDigits=true;
        }
        if(c>='A' && c<='Z' || c>='a' && c<='z'){
            containAlphabet=true;
        }
    }
    return containDigits&&containAlphabet
}
