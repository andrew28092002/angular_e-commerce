import { Component, OnInit } from '@angular/core';
import { Cart, CartItem } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cart: Cart = {
    items: [
      {
        product: 'https://via.placeholder.com/150',
        name: 'snickers',
        price: 150,
        quantity: 1,
        id: 1,
      },
    ],
  };
  dataSource: CartItem[] = [];
  displayedColumns: string[] = [
    'product',
    'name',
    'price',
    'quantity',
    'total',
    'action',
  ];

  constructor(private CartService: CartService) {}

  ngOnInit(): void {
    this.CartService.cart.subscribe((_cart) => {
      this.cart = _cart;
      this.dataSource = this.cart.items;
    });
  }

  getTotal(items: CartItem[]): number {
    return this.CartService.getTotal(items);
  }

  onClearCart():void{
    this.CartService.clearCart()
  }

  onRemoveFromCart(item: CartItem): void{
    this.CartService.removeFromCart(item)
  }

  onRemoveQuantity(item: CartItem){
    this.CartService.removeQuantity(item)
  }

  onAddQuantity(item: CartItem){
    this.CartService.addToCart(item)
  }
}
