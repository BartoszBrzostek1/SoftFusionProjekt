
wynikBMI = () => {
   const a = document.kalBMI.waga.value;
   const b = document.kalBMI.wzrost.value;  

   if(a > 0 && b > 0)
   {
      const wynik =  a/((b/100) * (b/100));
      if(wynik < 18.5){
         document.kalBMI.odp.value = "Poniżej warrtości prawidłowej, jedz więcej i zdrowiej."
      }
      if(wynik > 18.5 && wynik < 25){
         document.kalBMI.odp.value = "Brawo! Jest to wartość prawidłowa."
      }
      if(wynik > 25){
         document.kalBMI.odp.value = "Powyżej wartości prawidłowej, zalecamy schudnąć."
      }

      document.kalBMI.bmiwynik.value = wynik.toFixed(2);
   }
   else {
      alert("Podano złą wartość");
   }  
}
