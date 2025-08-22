function generateNumber(){
   const paragrafo =document.querySelector("#paragrafo")
  const min = Math.ceil(document.querySelector('.input-min').value)
  const max = Math.floor(document.querySelector('.input-max').value) 
     if(min>=max) {
       alert("O valor minimo tem que ser MENOR que o valor maximo")
     } else{
         console.log( min , max)
   const result = Math.floor(Math.random() * (max - min + 1)) + min; 
    
   paragrafo.innerHTML=(result)


     }

   

} 
