function bmi() {
   var a = document.getElementById('waga').value;
   var b = document.getElementById('wzrost').value;  

   var result = parseFloat(a) / (parseFloat(b) * parseFloat(b))        
       
   document.getElementById('result').value = '= ' + result;
}