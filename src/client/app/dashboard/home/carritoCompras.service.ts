import { Injectable } from '@angular/core';

class Ventas {
    public cliente: String;
    public producto: string;
    public valor: number;
    public cantidad: number;
}
@Injectable()
export class CarritoComprasService {

    public datos: Array<Ventas>;

    constructor() {
        this.datos = new Array<Ventas>();
    }
    public getProductos(): Array<Ventas> {
        return this.datos;
    }

    public addVenta(): void {
        let venta: Ventas = new Ventas();
        venta.cantidad = 4;
        venta.cliente = "Daniel";
        venta.producto = "Anillo";
        venta.valor = 10000;
        this.datos.push(venta)
    }

}