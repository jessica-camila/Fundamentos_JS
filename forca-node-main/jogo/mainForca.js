function tocaSomTic(){
  // toca o som pom 
  document.querySelector('#som_tecla_tic').play();
}
                                              // function sem () pq não vai executar no mesmo momento que é guardada
// document.querySelector('.tecla_A').onclick = tocaSomTic;

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let i=0;i<27;i++){
  listaDeTeclas[i].onclick = tocaSomTic;
}

// let contador = 0;

// while (contador<27) {
//   listaDeTeclas[contador].onclick = tocaSomTic;
//   contador = contador + 1;
// }
