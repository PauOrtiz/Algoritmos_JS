function confirmEnding(cadena, termino) {
     if(cadena.substr(-termino.length)===termino){
    return true;  
      }else{   
        return false;  
    }
}
        confirmEnding("Alejandra", "dra");
    