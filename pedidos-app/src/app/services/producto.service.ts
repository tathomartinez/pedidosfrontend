import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, Subject } from 'rxjs';

import { Producto } from '../objects/producto';


@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  productos : Producto[] = [];


  constructor(private http: HttpClient) { };
  
 

  // private productos$ = new Subject<Producto[]>();
  public productos$: Subject<Producto[]> = new Subject<Producto[]>();

  getProductos(): Observable<any>{
    return this.http.get('http://localhost:8180/productos');
  }

  addCarrito(item: Producto) {
    
    this.productos.push(item);
    console.log('hola')
    this.productos$.next(this.productos);
    console.log(this.productos)

  }

  obtenerCarrito(): Producto[] {
    return this.productos;
  }

  getCarrito$(): Observable<Producto[]> {
    console.log('hola')
    return this.productos$.asObservable();
    
  }

}


