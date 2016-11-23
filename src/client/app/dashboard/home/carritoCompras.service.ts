import { Injectable } from '@angular/core';

class Ventas {
    public id: number;
    //public cliente: String;
    public nombre_producto: string;
    public valor: number;
    public cantidad: number;
    public total: number;
}
@Injectable()
export class CarritoComprasService {
    public datos: Array<Ventas>;

    static instance:CarritoComprasService;
    static isCreating:Boolean = false;

    constructor() {
         if (!CarritoComprasService.isCreating) {
            throw new Error('You cant call new in Singleton instances!');
        }
        
        
    }
    static getInstance() {
        if (CarritoComprasService.instance == undefined) {
            CarritoComprasService.isCreating = true;
            CarritoComprasService.instance = new CarritoComprasService();
            CarritoComprasService.instance.init();
        }
        return CarritoComprasService.instance;
    }
    public getProductos(): Array<Ventas> {
        return this.datos;
    }
    public init():void{
        this.datos = new Array<Ventas>();
    }

    public addProducto(producto: any): void {
        let venta: Ventas = new Ventas();
        venta.id = producto.id;
        venta.cantidad = 1;
        venta.nombre_producto = producto.nombre;
        venta.valor = producto.precio;
        venta.total = producto.precio;

        let productosIguales: any = this.datos.filter(function(elem: any){
            return elem.id===producto.id
        });

        if(productosIguales.length === 0) {
            this.datos.push(venta);
        }else {
            productosIguales[0].cantidad += 1;
            productosIguales[0].total = producto.precio * productosIguales[0].cantidad;
        }
    }

    public eliminarProducto(producto: any): void {
        var pos = this.datos.indexOf(producto);
        this.datos.splice(pos,1);
    }

    public concatenarNombreProductos(): string {
        let listaProductos: string = '';
        this.datos.forEach(function(producto) {
            listaProductos += producto.nombre_producto + ', ';
        }, this);

        return listaProductos;
    }

    public totalCompra(): number {
        let totalCompra: number = 0;
        this.datos.forEach(function(producto) {
            totalCompra += producto.total;
        }, this);

        return totalCompra;
    }

}
