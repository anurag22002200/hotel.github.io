
let password1 = document.getElementById("password").value;
let password2 = document.getElementById("confirm_password").value;
let create = document.querySelector("#create");
let pwd = document.querySelector('#password');
let msg = document.querySelector(".message");

pwd.addEventListener('blur', function () {
    if (password1.length < 8)
        msg.innerHTML = "*Password must contain 8 digits";
    else if(password1.length > 8)
        msg.innerHTML = "";
});
create.addEventListener('click', function () {
    if (password1 != password2)
        alert('Passwords do not match');
})

function choose_profile() {
    let book_for = document.getElementById("book_for_").value;

    let msg = document.querySelector(".message");

    if (book_for == "human") {
        msg.textContent = "Humans are welcome";


    }
    else if (book_for == "monster")
        {
            msg.textContent = "Monsters are welcome";
        }
}
