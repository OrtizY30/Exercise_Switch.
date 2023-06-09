// /*El objetivo de este ejemplo es determinar la cantidad de días en un mes específico. Utilizando un switch case, se identifica el mes proporcionado y se muestra la cantidad de días correspondiente.*/

var mes= 'noviembre'

switch (mes){
  case 'enero':
    console.log('Enero tiene 31 días');
    break;
  case 'febrero':
    console.log('Febrero tiene 28 días');
    break;
  case 'marzo':
    console.log('Marzo tiene 31 días');
    break;
  case 'abril':
    console.log('Abril tiene 30 días');
    break;
  case 'mayo':
    console.log('Mayo tiene 31 días');
    break;
  case 'junio':
    console.log(' Junio tiene 30 días');
    break;
  case 'julio':
    console.log(' Julio tiene 31 días');
    break;
  case 'agosto':
    console.log(' Agosto tiene 31 días');
    break;
  case 'septiembre':
    console.log(' septiembre tiene 30 días');
    break;
  case 'octubre':
    console.log('Octubre tiene 31 días');
    break;
  case 'noviembre':
    console.log('Noviembre tiene 30 días');
    break;
  case 'diciembre':
    console.log(' Diciembre tiene 31 días');
    break;
  default:
    console.log('No se encontro ningún mes');
    break;

}