const notas = [10,6.5,8,7.5];

let somaDasNotas = 0;

// callback, chama de volta outra função
// O termo callback se refere à função que é “chamada de volta” dentro de 
// outra função

notas.forEach( nota => {
    somaDasNotas += nota
})

// outra forma de escrita
// notas.forEach(function(nota){
//     somaDasNotas += nota
// })

let media = somaDasNotas/notas.length;

console.log(media)