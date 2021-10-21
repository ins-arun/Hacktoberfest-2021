/**
 * Bubble sort algorithm
 * 
 * Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in wrong order.
 */
function bblSort(arr){
     
 for(var i = 0; i < arr.length; i++){
     

   for(var j = 0; j < ( arr.length - i -1 ); j++){
       
 
     if(arr[j] > arr[j+1]){
         
     
       var temp = arr[j]
       arr[j] = arr[j + 1]
       arr[j+1] = temp
     }
   }
 }
 
 console.log(arr);
}
  

var arr = [234, 43, 55, 63,  5, 6, 235, 547];
  

bblSort(arr);
