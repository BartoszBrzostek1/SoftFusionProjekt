
/* class KalkulatorBMI {
    constructor(wzrost, waga){
        this.wzrost = wzrost;
        this.waga = waga;
    }

    LiczenieBMI(){
        const wynik = waga/(wzrost * wzrost);
        return `${wynik}`
    }
} */


const wynik = (wzrost, waga) => {return waga/(wzrost * wzrost);}
document.getElementById("bmi").innerHTML = wynik(1.82, 68);