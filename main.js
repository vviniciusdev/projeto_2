const form = document.getElementById("form_contact");

function validaNome(fullName){
    const nameWithArray = fullName.split(' ');
    return nameWithArray.length >= 2;
}

form.addEventListener('submit', function(e: SubmitEvent) : void{
    let formValid : Boolean = false
    e.preventDefault();

    const nameYourName : HTMLElement = document.getElementById ('name_YourName');

    formValid = validaNome(name_YourName.value)
    if (formValid) {
        alert("O nome está incorreto!");
    } else {
        alert("Está tudo correto!");
    }
})

console.log(form);