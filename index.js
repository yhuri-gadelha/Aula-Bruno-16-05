console.log('tttttttt');

const form = document.getElementById('cad');

form.addEventListener('submit', function(event) {
    event.preventDefault();

const cpf = document.getElementById('cpf').value;  
const nome = document.getElementById('nome').value;
const idade = document.getElementById('idade').value;    

const formData = {
    cpf:cpf,
    nome:nome,
    idade:idade,
}

localStorage.setItem('formulario', JSON.stringify(formData));

})

