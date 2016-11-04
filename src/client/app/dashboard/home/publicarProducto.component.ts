import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
	moduleId: module.id,
    selector: 'publicar-producto-cmp',
    templateUrl: './publicarProducto.component.html'
})

export class PublicarProductoComponent {
    registrarProductoForm: NgForm;
    @ViewChild('registrarProductoForm') currentForm: NgForm;
    public nombre: string;
    public precio: string;
    // Alert
	public alerts: Array<Object> = [];
    constructor(private router: Router) {
	}

    // Alert
	public closeAlert(i:number):void {
		this.alerts.splice(i, 1);
	}

    onSubmit() {
        this.alerts.push({ msg: 'Pronto se procesará la publicación del producto', type: 'success', dismissOnTimeout: 7000 });
        //this.alerts.push({msg: 'Another alert!', type: 'warning', closable: true});
        this.nombre = '';
        this.precio = '';
    }
}
