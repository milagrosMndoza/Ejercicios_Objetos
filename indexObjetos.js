var assert = require('assert');


//Ejercicio 1
function objetos1(base, altura){
  this.base= base;
  this.altura = altura;
  this.calcular = function(){
    return this.base * this.altura;
  };
}

var rectangulo = new objetos1(15, 10);
var rectangulo2 = new objetos1(350, 1000);
//console.log(rectangulo.calcular());

//Ejercicio 2
function objetos2(nombre, dia, mes, anio){
  var persona = {
    nombre: nombre,
    dia: dia,
    mes: mes,
    anio: anio,
  }
   var fechActual = new Date();
   var year = fechActual.getFullYear();
   var month = fechActual.getMonth();
   var day = fechActual.getDate();
   var calEdad = year - persona.anio;
   
   if(month<(persona.mes -1)){
    calEdad --;
  }
  if(((persona.mes -1) == month) && (day< persona.dia)){
    calEdad --;
  }
  return persona.nombre + " tiene " + calEdad + " años.";
}
var datos = new objetos2("Lu",04,06,1991);
var datos2 = new objetos2("Ana",04,11,1991);

//Ejercicio 3
function objetos3(nombre, edad, pasatiempo){
  this.nombre = nombre;
  this.edad = edad;
  this.pasatiempo = pasatiempo;
  this.saludar = function(){
    return 'Hola soy ' + this.nombre + ' tengo '+ this.edad + ' años y me gusta ' + this.pasatiempo;
  }
}
var persona = new objetos3("Mily",23,"viajar");
var persona2 = new objetos3("Edwin",35,"ayudar a los demas");


describe('Ejercicios Objetos', function(){
  describe('Ejercicio 1', function(){
      it('Prueba de 15 y 10', function(){
      assert.equal(150, rectangulo.calcular());
    });
      it('Prueba de 350 y 1000', function(){
      assert.equal(350000, rectangulo2.calcular());
    });
  });
  describe('Ejercicio 2', function(){
      it('Cuando digitamos: Lu, 04, 06, 1991', function(){
      assert.equal("Lu tiene 26 años.",objetos2("Lu",04,06,1991));
    });
      it('Cuando digitamos: Ana, 04, 11, 1991', function(){
      assert.equal("Ana tiene 25 años.",objetos2("Ana",04,11,1991));
    });
  });
  describe('Ejercicio 3', function(){
      it('Cuando digitamos: Mily, 23, viajar', function(){
      assert.equal("Hola soy Mily tengo 23 años y me gusta viajar", persona.saludar());
    });
      it('Cuando digitamos: Edwin, 35, ayudar a los demas', function(){
      assert.equal("Hola soy Edwin tengo 35 años y me gusta ayudar a los demas", persona2.saludar());
    });
  });
});
