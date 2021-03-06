import { Route } from '@angular/router';

import { HomeRoutes } from './home/index';
import { ChartRoutes } from './charts/index';
import { BlankPageRoutes } from './blank-page/index';
import { TableRoutes } from './tables/index';
import { FormRoutes } from './forms/index';
import { GridRoutes } from './grid/index';
import { BSComponentRoutes } from './bs-component/index';
import { BSElementRoutes } from './bs-element/index';
import { DetalleProductoRoutes } from './home/index';
import { PublicarProductoRoutes } from './home/index';
import { CarritoComprasRoutes } from './home/index';
import { PagarCompraRoutes } from './home/index';
import { ConsultarComprasRoutes } from './home/index';

import { DashboardComponent } from './index';

export const DashboardRoutes: Route[] = [
  	{
    	path: 'dashboard',
    	component: DashboardComponent,
    	children: [
	    	...HomeRoutes,
	    	...ChartRoutes,
	    	...BSComponentRoutes,
        ...TableRoutes,
	    	...BlankPageRoutes,
			...DetalleProductoRoutes,
			...PublicarProductoRoutes,
			...CarritoComprasRoutes,
			...PagarCompraRoutes,
			...ConsultarComprasRoutes,
        ...FormRoutes,
        ...GridRoutes,
        ...BSElementRoutes
    	]
  	}
];
