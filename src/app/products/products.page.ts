import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
  products = [
    { name: 'Napolitana', price: 6990 , imageUrl: "assets/imagenes/napolitana.png" },
    { name: 'Peperoni', price: 7990 , imageUrl: "assets/imagenes/peperoni.png" },
    { name: 'Pollo', price: 11990 , imageUrl: "assets/imagenes/pollo.png" },
    { name: 'Carne', price: 12990 , imageUrl: "assets/imagenes/carne.png"},
    { name: 'Cordillerana', price: 8990 , imageUrl: "assets/imagenes/cordillerana.png" },
    { name: 'Italiana', price: 6990 , imageUrl: "assets/imagenes/italiana.png" },
    { name: 'Mechada', price: 12990 , imageUrl: "assets/imagenes/mechada.png" },
  ];

  constructor(private cartService: CartService, private toastController: ToastController) { }

  ngOnInit() { }

  async addToCart(product: any) {
    this.cartService.addItem(product);

    // Mostrar notificación
    const toast = await this.toastController.create({
      message: `${product.name} añadido al carrito.`,
      duration: 2000, // Duración en milisegundos
      position: 'bottom' // Posición en la pantalla
    });
    toast.present();
  }
}
