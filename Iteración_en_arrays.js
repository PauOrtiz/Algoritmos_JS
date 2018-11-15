function filteredArray(arr, elem) {  
    let newArr = [];
      for(let i in arr){   
          if(arr[i].indexOf(elem)==-1){// si el contenido del arreglo en esa posición no existe      
              newArr.push(arr[i]);//agrega al final del nuevo arreglo\n   }\n \n \n }\n    
              return newArr;
              console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));"}