function copyMachine(arr, num) {  
    let newArr = [];//esto está vació\n 
     while (num >= 1) { 
         newArr = [[...arr], ...newArr]; //en arr recibe la info del usuario, newArray copia el contenido de arr\n    
         num--; 
         return newArr;
         console.log(copyMachine([1, 2, 3], 5));