const boton = document.getElementById("icono");
const enlaces = document.getElementById("enlaces");
let contador = 0;

const nombre = document.getElementById("name");
const email = document.getElementById("email");
const asunto = document.getElementById("asunto");
const message = document.getElementById("mensaje");
const button = document.getElementById("btn-send");
const resultado = document.querySelector(".resultado");
const footer = document.getElementById("contact");
let divAdded = false;
const fragment = document.createDocumentFragment();
const div = document.createElement('DIV');

boton.addEventListener('click', function(){
    if (contador == 0) {
        enlaces.className = ('nav__responsive-ul dos');
        contador = 1;
        
        console.log(contador);
    } else {
        enlaces.classList.remove('dos');
        enlaces.className = ('nav__responsive-ul uno');
        contador = 0;
        console.log(contador);    
    }
})

button.addEventListener('click', (e) => {
    let error = checkForm();

    
    div.classList.add('resultado');
    if (error[0]){
        div.innerHTML = error[1];
        div.classList.add("wrongForm");
        div.classList.remove("correctForm");
    } else {
        div.innerHTML = "Mail enviado correctamente";
        div.classList.add("correctForm");
        div.classList.remove("wrongForm");
    }
    if(!divAdded){ 
        fragment.appendChild(div);
        footer.appendChild(fragment);
        divAdded = true;
    }
})

const checkForm = () => {
    let error = [];
    if (nombre.value.length < 5) {
        error[0] = true;
        error[1] = "El nombre tiene que tener mas de 4 caracteres";
        return error;
    } else if (email.value.length < 5 || 
            email.value.length > 40 || 
            email.value.indexOf("@")== -1 || 
            email.value.indexOf(".") == -1) {
        error[0] = true;
        error[1] = "El mail es invalido.";
        return error;
    } else if (asunto.value.length < 4) {
        error[0] = true;
        error[1] = "El asunto es demasiado corto";
        return error;
    }else if (message.value.length < 4) {
        error[0] = true;
        error[1] = "El mensaje es demasiado corto";
        return error;
    }
    error[0] = false;
    return error;
}