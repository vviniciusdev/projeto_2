const form = document.getElementById("form_contact");

function validaNome(fullName){
    const nameWithArray = fullName.split(' ');
    return nameWithArray.length >= 2;
}

form.addEventListener('submit', function(e){
    let formValid = false
    e.preventDefault();

    const nameYourName = document.getElementById ('name_YourName');
    formValid = validaNome(nameYourNamed.value)
    if (formValid) {
        alert("O nome está incorreto!");
    } else {
        alert("Está tudo correto!");
    }
})

console.log(form);