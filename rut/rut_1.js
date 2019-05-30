rut = '19890681';

suma = 0;
// los strings o cadenas de texto como rut se pueden acceder como si fuera una array o lista
suma += rut[7] * 2; // Usar += es lo mismo que hacer: suma = suma + rut[7]
suma += rut[6] * 3;
suma += rut[5] * 4;
suma += rut[4] * 5;
suma += rut[3] * 6;
suma += rut[2] * 7;
suma += rut[1] * 2;
suma += rut[0] * 3;

resto = suma % 11; // el operador '%' lo que hace es calcular el resto de la division
digito_verificador = 11 - resto;

console.log('La suma es: ' + suma);
console.log('El resto es: ' + resto);
console.log('El digito verificador es: ' + digito_verificador);
