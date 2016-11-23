import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CarritoComprasService } from './carritoCompras.service';
@Component({
	moduleId: module.id,
    selector: 'carrito-comprasa-cmp',
    templateUrl: './carritoCompras.component.html',
	providers:[CarritoComprasService]
})

export class CarritoComprasComponent {
	public listadoProductosCarrito: Array<any>;
    // Alert
	public alerts: Array<Object> = [];

    // Alert
	public closeAlert(i:number):void {
		this.alerts.splice(i, 1);
	}

	constructor(private router: Router) {
		this.consultarProductosCarrito();
	}
	consultarProductosCarrito() {
		//this.listadoProductosCarrito = this.carritoComprasService.getProductos();
		this.listadoProductosCarrito = CarritoComprasService.getInstance().getProductos();
		if(this.listadoProductosCarrito.length === 0) {
			let mensaje = 'No se han agregado productos al carrito';
            this.alerts.push({ msg: mensaje, type: 'warning', dismissOnTimeout: 7000 });
		}
		console.log(this.listadoProductosCarrito);
	}

	pagarCompra() {
		if(this.listadoProductosCarrito.length === 0) {
			let mensaje = 'Se deben agreagar productos al carrito para pasar a Pagar';
            this.alerts.push({ msg: mensaje, type: 'danger', dismissOnTimeout: 7000 });
		} else {
			this.router.navigate(['/dashboard', 'pagar_compra']);
		}
	}

	eliminarProductoCarrito(producto: any){
		//this.carritoComprasService.addProducto(producto);
		CarritoComprasService.getInstance().eliminarProducto(producto);
		let mensaje = 'Se eliminó el producto ' + producto.nombre_producto;
    	this.alerts.push({ msg: mensaje, type: 'success', dismissOnTimeout: 7000 });
	}
}
