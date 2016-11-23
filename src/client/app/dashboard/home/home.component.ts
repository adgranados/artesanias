import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CarritoComprasService } from './carritoCompras.service';
/**
*	This class represents the lazy loaded HomeComponent.
*/


@Component({
	moduleId: module.id,
	selector: 'producto-cmp',
	templateUrl: 'producto.html',
	styleUrls: ['producto.css'],
	providers:[CarritoComprasService]
})
export class ProductoComponent {
	@Input()  prod: Object;
	// Alert
	public alerts: Array<Object> = [];

	constructor(private router: Router) {
	}

	// Alert
	public closeAlert(i:number):void {
		this.alerts.splice(i, 1);
	}

	verDetalle(producto: any) {
		this.router.navigate(['/dashboard', 'ver_detalle_producto', producto]);
	}

	agregarProductoCarrito(producto: any){
		//this.carritoComprasService.addProducto(producto);
		CarritoComprasService.getInstance().addProducto(producto);
		let mensaje = 'Se ha agregado el producto ' + producto.nombre;
        this.alerts.push({ msg: mensaje, type: 'success', dismissOnTimeout: 7000 });
	}

}


@Component({
	moduleId: module.id,
	selector: 'timeline-cmp',
	templateUrl: 'timeline.html',
	styleUrls: ['timeline.css'],
})
export class TimelineComponent { }

@Component({
	moduleId: module.id,
	selector: 'chat-cmp',
	templateUrl: 'chat.html'
})
export class ChatComponent {}

@Component({
	moduleId: module.id,
	selector: 'notifications-cmp',
	templateUrl: 'notifications.html'
})
export class NotificationComponent { }

@Component({
	moduleId: module.id,
	selector: 'home-cmp',
	templateUrl: 'home.component.html'
})

export class HomeComponent {
	/* Carousel Variable */
	myInterval: number = 5000;
	index: number = 0;
	slides: Array<any> = [];
	imgUrl: Array<any> = [
		`assets/img/1.jpg`,
		`assets/img/2.jpg`,
		`assets/img/3.jpg`,
		`assets/img/4.jpg`
	];
	/* END */
	/* Alert component */
	public alerts:Array<Object> = [
	   {
	     type: 'danger',
	     msg: 'Oh snap! Change a few things up and try submitting again.'
	   },
	   {
	     type: 'success',
	     msg: 'Well done! You successfully read this important alert message.',
	     closable: true
	   }
	 ];
	 public closeAlert(i:number):void {
	   this.alerts.splice(i, 1);
	 }
	/* END*/
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

	constructor(private router: Router,) {
		for (let i = 0; i < 4; i++) {
			this.addSlide();
		}
	}

	/* Carousel */
	addSlide() {
		let i = this.slides.length;
		this.slides.push({
			image: this.imgUrl[i],
			text: `${['Dummy ', 'Dummy ', 'Dummy ', 'Dummy '][this.slides.length % 4]}
      			${['text 0', 'text 1', 'text 2', 'text 3'][this.slides.length % 4]}`
		});
	}
	/* END */

}
