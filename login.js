const login = () => {
    const idPass = {
        harish: "elon stark"
    }
    let userInupt = document.querySelector("#txt").value;
    let userPass = document.querySelector("#pass").value;
    
    let found = 0;

    for(let val in idPass){
        if (val === userInupt && idPass[val] === userPass){
            window.location.href = "input.html";
            found = 1;
            break;
        } else{
            found = 0;
        }
    }

    if (found === 0){
        alert("wrong input")
        document.querySelector("#pass").value = null;
        document.querySelector("#txt").value = null;
    }
}

const show = () => {
    
    let passInput = document.querySelector("#pass");
    let userPass = passInput.value;

    passInput.type = "text";
    passInput.value = userPass;

    // Set a timeout to revert the input type back to "password" after a short delay
    setTimeout(() => {
        passInput.type = "password";
    }, 2000); // Adjust the delay (in milliseconds) as needed
}
// const show = () => {
//     let passInput = document.querySelector("#pass");
//     let userPass = passInput.value;

//     // Temporarily change the input type to "text" to display the password
//     passInput.type = "text";
//     passInput.value = userPass;

//     // Set a timeout to revert the input type back to "password" after a short delay
//     setTimeout(() => {
//         passInput.type = "password";
//     }, 2000); // Adjust the delay (in milliseconds) as needed
// }

let btn = document.querySelector("#btn");
btn.addEventListener("click",login);

let btn2 = document.querySelector("#show");
btn2.addEventListener("click",show);