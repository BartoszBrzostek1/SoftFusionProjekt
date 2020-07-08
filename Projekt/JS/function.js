
wynikBMI = () => {
   const a = document.kalBMI.waga.value;
   const b = document.kalBMI.wzrost.value;  

   if(a > 0 && b > 0)
   {
      const wynik =  a/((b/100) * (b/100));
      if(wynik < 18.5){
         document.kalBMI.odp.value = "Poniżej normy"
      }
      if(wynik > 18.5 && wynik < 25){
         document.kalBMI.odp.value = "Norma"
      }
      if(wynik > 25){
         document.kalBMI.odp.value = "Powyżej normy"
      }

      document.kalBMI.bmiwynik.value = wynik.toFixed(2);
   }
   else {
      alert("Podano złą wartość");
   }  
}
