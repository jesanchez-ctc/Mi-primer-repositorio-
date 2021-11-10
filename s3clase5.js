

/*var clima = parseInt(prompt('Ingrese un clima'));
switch (clima){
case (lluvioso):
    console.log('Recuerda llevar un paraguas');
    alert('Recuerda llevar un paraguas');
    break;
case (soleado) :
    console.log('viste ligero');
    alert('viste ligero');
    break;
case (nublado):
    console.log('sal a la calle');
    alert('sal a la calle');
    break;
default:
    console.log('Tipo de clima desconocido');
    alert('Tipo de clima desconocido');
break;
} */ 

//Switch simple :

var num = parseInt(prompt('Ingrese un número'));

switch(num){
case 1: console.log('num tiene el valor 1');
alert('num tiene el valor 1');
break;

case 2: console.log('num tiene el valor 2');
alert('num tiene el valor 2');
break;

default: console.log('num no vale ni 1 ni 2');
alert('num no vale ni 1 ni 2');
}


//switch multiple:

switch(num){
  case 1:
  case 3:
  case 5:
    console.log('num es impar');
    alert('num es impar');
    break;
   case 2:
   case 4:
   console.log('num es par');
   alert('num es par');

}
