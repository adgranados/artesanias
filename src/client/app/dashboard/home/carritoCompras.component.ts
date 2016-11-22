import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	moduleId: module.id,
    selector: 'carrito-comprasa-cmp',
    templateUrl: './carritoCompras.component.html'
})

export class CarritoComprasComponent {
        // Alert
	public alerts: Array<Object> = [];

    // Alert
	public closeAlert(i:number):void {
		this.alerts.splice(i, 1);
	}

	constructor(private router: Router) {
	}

	pagarCompra() {
		this.router.navigate(['/dashboard', 'pagar_compra']);
	}

}
