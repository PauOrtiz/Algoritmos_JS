function repeatStringNumTimes(str, num) {
  var almacen=""; //sin espacio enmedio ya que contendrá cadena
if(num<0){//regresa vacío si es negativo
return almacen;}
for(var i=0; i<num;i++){
     almacen=almacen+str;//va agregando la cadena a la variable
  }
  return almacen;
}

repeatStringNumTimes("abc", 3);
