import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ConsultarComprasService } from './consultarCompras.service';
@Component({
	moduleId: module.id,
    selector: 'consultar-compras-cmp',
    templateUrl: './consultarCompras.component.html',
	providers:[ConsultarComprasService]
})

export class ConsultarComprasComponent {
	public listadoCompras: Array<any>;
    public alerts: Array<Object> = [];

	constructor(private router: Router, private consultarComprasService: ConsultarComprasService) {
		this.consultarCompras();
	}
	consultarCompras() {
		 let requestObserver: Observable<Object> = this.consultarComprasService.consultarCompras();
        let success = (data: any) => {
            this.listadoCompras = data;
            console.log(this.listadoCompras);
        };

        let error = (error: any) => {
            let mensaje = 'No se pudo consultar el listado de compras';
            this.alerts.push({ msg: mensaje, type: 'danger', dismissOnTimeout: 7000 });
        };

        requestObserver.subscribe(success, error);
	}
    public closeAlert(i: number): void {
        this.alerts.splice(i, 1);
    }
}
