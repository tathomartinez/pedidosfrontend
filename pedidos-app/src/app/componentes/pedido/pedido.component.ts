import { Component, OnInit, Input } from '@angular/core';
import { Producto } from '../../objects/producto';
import { ProductoService } from '../../services/producto.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {
  // @Input() productos :Producto[];
  
  productos : Producto[] = [];
  productos$: Observable<Producto[]>;

  constructor(public productoService: ProductoService) { 
    this.productos$ = this.productoService.getCarrito$();
    this.productos$.subscribe(productos => this.productos = productos);

    console.log(this.productos);
  }

  ngOnInit() {
  }

  refresh(){
    console.log(this.productoService.obtenerCarrito())
  }

}
