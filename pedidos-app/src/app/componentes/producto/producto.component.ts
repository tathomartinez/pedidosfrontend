import { Component, OnInit } from '@angular/core';
import { Producto } from '../../objects/producto';
import { ProductoService } from '../../services/producto.service';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  productos : Producto[] = [];
  holamundo :string = 'hola mundo';
  productosCarrito : Producto[] = [];

  constructor(public productoService: ProductoService, private notificacionService: NotificationsService) { }

  ngOnInit(): void {
    this.productoService.getProductos()
      .subscribe(
      item => {
        this.productos = [];
        item.forEach(element => {
          this.productos.push(element as Producto)
        })
      })
  }
  addCarrito(item:Producto){
    if(!this.productosCarrito.includes(item)){
      //this.onSucces('hola')
      this.notificacionService.success('x');
      this.productosCarrito.push(item);
    }
  }
  limpiarCarrito() {
    this.productosCarrito = [];
  }
  onSucces(message : String) {
    
  }
}
