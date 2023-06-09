/*Este ejemplo utiliza un switch case para convertir una cantidad dada en una unidad de longitud específica a otra unidad. Dependiendo de la unidad proporcionada, se realiza la conversión y se muestra el resultado en la unidad deseada. Esta conversión será de cm a m y km*/

var medida = 1
var unidad = 'km'

switch (unidad){
  case 'cm':
     metro = medida / 100 
     kilometros = medida / 100000
    console.log(medida+'cm', 'son', metro+'m', 'y', kilometros+'km');
    break;
  case 'm':
    centimetros = medida * 100
    kilometros = medida / 1000
    console.log(medida+'m', 'son', centimetros+'cm', 'y', kilometros+'km');
    break;
  case 'km':
    centimetros = medida * 100000
    metros = medida * 1000
    console.log(medida+'km', 'son', centimetros+'cm', 'y', metros+'m')
    
}