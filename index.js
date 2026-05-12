import { esVip } from "./vip.js";
import { calcularDescuento } from "./descuentos.js";
import { CalcularEnvio } from "./envio.js";

//let nombreCliente = prompt("Ingresa tu nombre");
//let cantidadPruductos = parseInt(prompt("Ingresa cantidad Producto"));
//let MontoTotal = parseFloat(prompt("Igresa monto total"));
let nombreCliente = "Karla";
let cantidadPruductos = 5;
let MontoTotal = 200;

//calcularEnvio
let envio = CalcularEnvio(cantidadProductos);

//
console.log(`hola ${nombreCliente}`);
console.log(`Costo de envio${envio}`);
console.log(`Tienes un descuento del${nombreCliente}`);
console.log(`NuevoTotal${nombreCliente}`);
