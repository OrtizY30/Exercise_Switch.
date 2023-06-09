/*Este ejemplo utiliza un switch case para determinar el día de la semana en función de un número dado. Dependiendo del valor del número, se muestra un mensaje correspondiente al día de la semana.*/
// /*Este ejemplo utiliza un switch case para determinar el día de la semana en función de un número dado. Dependiendo del valor del número, se muestra un mensaje correspondiente al día de la semana.*/

var dia= 'martes'

switch (dia){
 case 'lunes':
   console.log('hoy es lunes');
   break;
 case 'martes':
   console.log('hoy es Martes');
   break;
 case 'Miercoles':
   console.log('hoy es Miércoles');
   break; 
 case 'jueves':
   console.log('hoy es Jueves');
   break;
 case 'viernes':
   console.log('hoy es lunes');
   break;
 case 'sabado':
   console.log('hoy es Sabado');
   break; 
 case 'domingo':
   console.log('hoy es Domingo');
   break; 
 default:
   console.log('No se encontro ningun día');
   break;
}