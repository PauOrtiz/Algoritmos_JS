function truncateString(str, num) {
  var nueva_cadena=" ";
    if(str.length>num&&num>3){
     nueva_cadena=str.slice(0,num-3)+'...';//el -3 es por los puntos suspensivos que estás agregando, slice corta y extrae elementos de una cadena(inicio, final)
 return nueva_cadena;
   }
     if(str.length<num){
  return str;
   }
}
