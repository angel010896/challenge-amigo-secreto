// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let Amigos = [];
function agregarAmigo(){
     
     let amigo = document.getElementById('amigo').value;
     if (isNaN(amigo)==true || amigo == '' || amigo == ' '){//VERIFICA SI NO ES UN NUMERO, ESTA VACIO O ES UN ESPACIO
        Amigos.push(amigo);
     }else{
        alert('Ingrese un nombre valido');
     };
     console.log(Amigos.length);
     console.log(Amigos);
     limpiarCaja();
}
function limpiarCaja(){
 let limpiar = document.querySelector('#amigo');
 limpiar.value = ''; //LIMPIA LA CAJA
}
