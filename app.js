// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let Amigos = [];
function agregarAmigo(){
     let amigo = document.getElementById('amigo').value;//SELECCIONA EL VALOR DE LA CAJA DE TEXTO Y LO GUARDA EN AMIGO
     if (amigo !== '' && !/\d/.test(amigo)){//VERIFICA SI NO ES UN NUMERO, ESTA VACIO O ES UN ESPACIO \D BUSCA NUMERO EN LA CADENA .TEST EVALUA A AMIGO ! NEGACION
        Amigos.push(amigo);
     }else{
        alert('Ingrese un nombre valido');//MUESTRA LA ALERTA
     };
     console.log(Amigos.length);
     console.log(Amigos);
     limpiarCaja();//LIMPIA LA CAJA DE TEXTO
     mostrarAmigos()//MUESTRA LOS AMIGOS
}
function limpiarCaja(){
 let limpiar = document.querySelector('#amigo');//SELECCIONA LA CAJA DE TEXTO DONDE SE INGRESA EL NOMBRE
 limpiar.value = ''; //LIMPIA LA CAJA
};
function mostrarAmigos(){
    let mostrar = document.getElementById('listaAmigos');//SELECCIONA A LISTA AMIGOS
    mostrar.innerHTML = '';//LIMPIA LA LISTA PARA INICIAR VACIA
    for(let i = 0; i < Amigos.length; i++){ //RECORRE EL ARREGLO DE AMIGOS
        mostrar.innerHTML += `<li>${Amigos[i]}</li>`; //AGREGA EN FORMA DE LISTA CADA UNO DE LOS AMIGOS <LI> ES PARA HACERLO EN FORMA DE LISTA
    }
};
function sortearAmigo(boton){
    if (Amigos.length == 0 || Amigos.length == 1){//VERIFICA QUE EL NUMERO DE AMIGOS NO SEA 1 O 0
        alert(`No se puede realizar el sorteo por que hay ${Amigos.length} ${Amigos.length == 1 ? 'amigo' : 'amigos'}`);//ENVIA ALERTA QUE NO SE PUEDE HACER EL SORTEO
    }else{
        let numeroSorteado = Math.floor(Math.random() * Amigos.length);//GENERA UN NUMERO ALEATORIO 
        let numeroElegido = Amigos[numeroSorteado];//SELECCIONA EL AMIGO QUE TIENE EL SUMERO ALEATORIO
        limpiarLista();
        let ganadorSorteo = document.getElementById('resultado');//SELECCIONA RESULTADO
        ganadorSorteo.innerHTML = `<h2> El amigo sorteado es : ${numeroElegido} </h2>`;//MUESTRA AL GANADOR
        boton.disabled = true;
    };
};
function limpiarLista(){
    let limpieza = document.getElementById('listaAmigos');//SELECCIONA A LISTA AMIGOS
    limpieza.innerHTML = '';//LIMPIA LA LISTA
};
function reiniciarJuego(){
   location.reload();
    
};