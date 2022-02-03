let boton = document.getElementById("icono");
let enlaces = document.getElementById("enlaces");
let contador = 0;

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

