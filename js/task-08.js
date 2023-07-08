const form=document.querySelector(".login-form")
form.addEventListener("submit", handler);
function handler(event) {
    event.preventDefault();
    const {
        elements: { email, password }
    } = event.currentTarget;

    if (email.value === "" || password.value === "") {
    
        return alert("Please fill in all the fields!");
    }
    else {
        const user = {
            email: email.value,
            password: password.value,
        }
        console.log(user)
    }
 event.currentTarget.reset();
}