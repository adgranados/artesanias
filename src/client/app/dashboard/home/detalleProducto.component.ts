import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription }       from 'rxjs/Subscription';

@Component({
	moduleId: module.id,
    selector: 'ver-detalle-producto',
    templateUrl: './detalleProducto.component.html'
})

export class DetalleProductoComponent  implements OnInit {
	sub: Subscription;
	public idProducto: number;
	public productoSeleccionado:Object;
	public productos:Array<Object> = [
		{
			'id':1,
			'nombre':'Brazalete en mopa mopa',
			'precio':58000,
			'path':'artesanias/2824_pulsera-mopa-mopa-barniz-pasto-artesanias-colombia-p.jpg'
		},
		{
			'id':2,
			'nombre':'Abre Cartas',
			'precio':9000,
			'path':'artesanias/2936_abrecartas-madera-carnaval-barranquilla-galapa-atlantico-artesanias-colombia-p.jpg'
		},
		{
			'id':3,
			'nombre':'Aguamanil Carmen de Viboral',
			'precio':148000,
			'path':'artesanias/2682_aguamanil-carmen-viboral-pintura-ceramica-artesanias-colombia-p.jpg'
		},
		{
			'id':4,
			'nombre':'Alcaparras cerámicas con Cuchara',
			'precio':39000,
			'path':'artesanias/2674_alcaparras-ceramica-guaduas-cundinamarca-artesanias-colombia-p.jpg'
		},
		{
			'id':5,
			'nombre':'Balay Mediano',
			'precio':84000,
			'path':'artesanias/3701_balay-mediano-p.png'
		},
		{
			'id':6,
			'nombre':'Balay Pequeño',
			'precio':41000,
			'path':'artesanias/2625_balay-pequeno-p.png'
		},
		{
			'id':7,
			'nombre':'Balay Siriano Grande',
			'precio':133000,
			'path':'artesanias/3705_balay-mediano-p.png'
		},
		{
			'id':8,
			'nombre':'Banco Kamentzá, decorado chumbes',
			'precio':270000,
			'path':'artesanias/2782_butaco-kamentza-madera-sibundoy-putumayo-artesanias-colombia-p.jpg'
		},
		{
			'id':9,
			'nombre':'Banco Tucano Mediano',
			'precio':82000,
			'path':'artesanias/2623_bancotucano-p.jpg'
		}
	];

    public dataProducto: any = {
		'id':5,
		'nombre':'Balay Mediano',
		'precio':84000,
		'path':'artesanias/3701_balay-mediano-p.png'
    };

    constructor(private router: Router, private route: ActivatedRoute) {
	}

	ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.idProducto = +params['id']; // (+) converts string 'id' to a number
			let __this = this;
			let p = this.productos.filter(function(producto:any){
				return producto.id === __this.idProducto;
			});
			this.productoSeleccionado = p[0];
        });
    }
    volverHome() {
		this.router.navigate(['/dashboard', 'home']);
	}
}
