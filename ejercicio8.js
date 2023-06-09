/*En este caso, el switch case se utiliza para identificar si un día específico es un día laborable o un día de fin de semana. Dependiendo del día proporcionado, se muestra un mensaje correspondiente al tipo de día.*/

var dia= 'sabado'

switch (dia){
  case 'lunes':
  case 'martes':
  case 'miercoles':
  case 'jueves':
  case 'viernes':
    console.log('Es', dia, 'y es laborable');
    break;
  case 'sabado':
  case 'domingo':
  case 'festivo':
    console.log('Es', dia, 'y no es un dia laborable');
    break;
  default:
    console.log('error')
}