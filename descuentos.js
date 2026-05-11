 export function calcularDescuento(total){
    if(total>500){
        console.log("Desuento del 12%")
    }
    if(total>200 || total<=500){
        console.log("Aplicar Descuento del 5%")

    }
    else{
                console.log("Aun no aplicas para un descuento si quieres descuento de 12% tienes que tener mas de 500 y si quieres uno de 5% tienes que tener entre 200 y 500")


    }

}