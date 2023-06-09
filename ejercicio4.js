/*En este caso, el switch case se utiliza para convertir una calificación numérica en su equivalente en texto. Dependiendo del número de calificación, se muestra el mensaje correspondiente al nivel de rendimiento.*/

var nota= 3

if (nota > 0 & nota <= 6){
  switch (nota){
    case 1:
      console.log('Muy Deficiente');
      break;
    case 2:
      console.log('Insuficiente');
      break;
    case 3:
      console.log('Suficiente');
      break;
    case 4:
      console.log('Bien');
      break;
    case 5:
      console.log('Notable');
      break;
    case 6:
      console.log('Sobresaliente');
      break;  
  }
}

else{
  console.log('nota invalida')
}