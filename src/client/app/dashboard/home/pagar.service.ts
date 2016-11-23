import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { enableProdMode } from '@angular/core';
enableProdMode();

@Injectable()
export class PagarService {
  private urlGlobalServiceParking = 'http://192.168.100.96:8090/compras/add';

  constructor(private http: Http) { }

  registrarPago(
      nombre_cliente: string,
      direccion: string,
      celular: string,
      total_pagar: number,
      tipo_tarjeta: string,
      numero_tarjeta: string,
      codigo_seguridad: string,
      banco_tarjeta: string,
      productos: string
      ): any {
    let body = JSON.stringify({
      'nombre_cliente': nombre_cliente,
      'direccion': direccion,
      'celular': celular,
      'total_pagar': total_pagar,
      'tipo_tarjeta': tipo_tarjeta,
      'numero_tarjeta': numero_tarjeta,
      'codigo_seguridad': codigo_seguridad,
      'banco_tarjeta': banco_tarjeta,
      'productos': productos,
    });
    let headers = new Headers({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.urlGlobalServiceParking, body, options)
      .map(this.extractData)
      .catch(this.handleError);
  }
  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }
  private handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
