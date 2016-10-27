import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	moduleId: module.id,
    selector: 'ver-detalle-producto',
    templateUrl: './detalleProducto.component.html'
})

export class DetalleProductoComponent {
    public dataProducto: any = {
		'id':5,
		'nombre':'Balay Mediano',
		'precio':84000,
		'path':'artesanias/3701_balay-mediano-p.png'
    };

    constructor(private router: Router,) {
	}
    volverHome() {
		this.router.navigate(['/dashboard', 'home']);
	}
}
