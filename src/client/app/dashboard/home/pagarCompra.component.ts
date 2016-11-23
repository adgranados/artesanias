import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { PagarService } from './pagar.service';
import { CarritoComprasService } from './carritoCompras.service';

@Component({
	moduleId: module.id,
    selector: 'pagar-compra-cmp',
    templateUrl: './pagarCompra.component.html',
    providers: [PagarService,CarritoComprasService]
})

export class PagarCompraComponent {
    pagarCompraForm: NgForm;
    @ViewChild('pagarCompraForm') currentForm: NgForm;
    public nombre_cliente: string;
    public direccion: string;
    public celular: string;
    public total_pagar: number;
    public tipo_tarjeta: string;
    public numero_tarjeta: string;
    public codigo_seguridad: string;
    public banco_tarjeta: string;
    public productos: string;

    // Alert
	public alerts: Array<Object> = [];
    constructor(private router: Router, private pagarService: PagarService) {
        this.total_pagar = CarritoComprasService.getInstance().totalCompra();
	}

    // Alert
	public closeAlert(i:number):void {
		this.alerts.splice(i, 1);
	}

    onSubmit() {
        this.productos = CarritoComprasService.getInstance().concatenarNombreProductos();
        let requestObserver: Observable<Object> = this.pagarService.registrarPago(
            this.nombre_cliente,
            this.direccion,
            this.celular,
            this.total_pagar,
            this.tipo_tarjeta,
            this.numero_tarjeta,
            this.codigo_seguridad,
            this.banco_tarjeta,
            this.productos
            );

            let success = (data: any) => {
                console.log(data);
                this.alerts.push({ msg: 'Su pago se ha registrado con éxito', type: 'success', dismissOnTimeout: 7000 });
            
                this.nombre_cliente = '';
                this.direccion = '';
                this.celular = '';
                this.total_pagar = 0;
                this.tipo_tarjeta = '';
                this.numero_tarjeta = '';
                this.codigo_seguridad = '';
                this.banco_tarjeta = '';
                this.productos = '';
            };

            let error = (error: any) => {
                //console.log(error);
                let mensaje = 'No se pudo registrar el pago';
                this.alerts.push({ msg: mensaje, type: 'danger', dismissOnTimeout: 7000 });
            };

            requestObserver.subscribe(success, error);
    }
}
