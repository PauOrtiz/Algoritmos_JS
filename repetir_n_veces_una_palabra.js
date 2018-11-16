function repeatStringNumTimes(str, num) {
  var almacen=""; //sin espacio enmedio ya que es una cadena
if(num<0){
return almacen;}
for(var i=0; i<num;i++){
     almacen=almacen+str;
  }
  return almacen;
}

repeatStringNumTimes("abc", 3);
