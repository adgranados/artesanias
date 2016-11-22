import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
	moduleId: module.id,
    selector: 'pagar-compra-cmp',
    templateUrl: './pagarCompra.component.html'
})

export class PagarCompraComponent {
    pagarCompraForm: NgForm;
    @ViewChild('pagarCompraForm') currentForm: NgForm;
    public nombre_cliente: string;
    public banco_tarjeta: string;
    public numero_tarjeta: string;
    public total_pagar: string;
    // Alert
	public alerts: Array<Object> = [];
    constructor(private router: Router) {
	}

    // Alert
	public closeAlert(i:number):void {
		this.alerts.splice(i, 1);
	}

    onSubmit() {
        this.alerts.push({ msg: 'Pronto se procesará su pago', type: 'success', dismissOnTimeout: 7000 });
        //this.alerts.push({msg: 'Another alert!', type: 'warning', closable: true});
        this.nombre_cliente = '';
        this.banco_tarjeta = '';
        this.numero_tarjeta = '';
        this.total_pagar = '';
    }
}
