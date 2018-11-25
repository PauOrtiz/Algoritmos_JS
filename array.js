function largestOfFour(arr) {
  // You can do this! 
  var arrayDesplegado=[]; //en donde se agregarán por medio de push a este array vacío
    for(var i=0; i<arr.length;i++){//este recorre al array interno
        var elementoMayor=arr[i][0];
    
    for(var j=0; j<arr[i].length;j++) //este recorre a cada elemento del array interno
    {
      var actual= arr[i][j]; //por ejemplo [0][0]=4
      if(actual>=elementoMayor) { //a comparar para mostrar en un solo array
             elementoMayor=actual; //se va reemplazando el valor mientras recorre el array
      }                             //osea si actual es 4 y elementomayor es 5
    }                               // este valor no se altera sólo lo agrega al arr
    arrayDesplegado.push(elementoMayor);
   } //fin del for del principio
  return arrayDesplegado; 
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);