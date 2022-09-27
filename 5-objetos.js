const calificaciones= [10,6,7,8,8,7,5,10,9,9]
console.log(calificaciones);
calificaciones[6]=6;
console.log(calificaciones);

let suma= 0;
for (let i= 0; i < calificaciones.length; i ++) {
  console.log ("{suma} + {calificaciones[i]}");
  suma= calificaciones [i] + suma;

}

const promedio= suma/ calificaciones.length;
console.log("el promedio es {promedio }"); 
