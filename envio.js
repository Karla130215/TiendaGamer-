let productos=["control","playStation","pantalla"];


 export export function CalcularEnvio(productos){
    for(let i=0;i<productos.lenght;i++){
        if(productos.lenght>3 ||productos.lenght<=10){
            console.log("Costo de envio $15 USD");
            
        }
        else if(productos.lenght>10){
            console.log("Envio Gratis");

        }
        else{
            console.log("No se permiten compras menores a 3 productos");

        }
    }


}