
  export function CalcularEnvio(cantidadProductos){
    
        if(cantidadProductos>3 ||cantidadProductos<=10){
            console.log("Costo de envio $15 USD");
            
        }
        else if(cantidadProductos>10){
            console.log("Envio Gratis");

        }
        else{
            console.log("No se permiten compras menores a 3 productos");

        }
    


}