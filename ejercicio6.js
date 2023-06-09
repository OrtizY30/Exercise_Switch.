/*En este caso, se utiliza un switch case para asignar una categoría de edad a una persona en función de su edad. Dependiendo del rango de edad, se muestra un mensaje correspondiente a la categoría de edad.

De 0 a 2 años: "Bebé"
De 3 a 12 años: "Niño/a"
de 13 a 19 años: "Adolescente"
De 20 a 59 años: "Adulto/a"
Mayor de 60 años: "Adulto Mayor"*/

let edad = 15;

switch (true) {
  case (edad >= 1 && edad <= 2):
    console.log('eres un bebe');
    break;
  case (edad >= 3 && edad <= 10):
     console.log('eres un niño');
    break;
  case (edad >= 11 && edad <= 18):
    console.log('eres un adolescente');
    break;
  default:
    console.log('otra categoria');
    break;
}
