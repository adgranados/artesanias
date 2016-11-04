import { Route } from '@angular/router';
import { DetalleProductoComponent } from './index';

export const DetalleProductoRoutes: Route[] = [
  	{
    	path: 'ver_detalle_producto/:id',
    	component: DetalleProductoComponent
  	}
];
