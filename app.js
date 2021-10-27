
let delitos = [20, 10, 8,]; 
let recidente = 5;


do {
let preg1= prompt("Cual es el delito? \n 1- Homicidio \n 2- Robo \n 3- Evación de impuestos \n 4- Homicidio agravado");
let preg2= window.confirm ("Es su primer delito?");

    if (preg1== 1) {
        if (preg2==true) {
            let condena1 = delitos[0] - recidente;
            alert("La condena es de " + condena1 + " años");   
        }else if(preg2==false) {
            alert("La condena es de 20 años")
        }
    else if(preg1==2){
        if(preg2==true){
            let condena2= delitos[1]- recidente;
        }else if (preg2==false){
            alert("LA condena es de 10 años")
        }
    else if(preg1==3){
        if(preg2==true){
            let condena3= delitos[2] - recidente;
        }else if (preg2==false){
            alert("La condena es de 8 años")
        }
    }else if (preg1==4){
        alert("La condena es perpetua")
    }
    }
}  
    otraVez= confirm("¿Desea saber alguna otra condena?")
} while(otraVez==true);

