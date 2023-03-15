import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';

const ROWS_HEIGHT: {[id:number]: number} = {
  1: 400, 3:335, 4: 350
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  cols: number = 3;
  category: string | undefined;
  rowHeight = ROWS_HEIGHT[this.cols]

  constructor(private CartService: CartService){}

  ngOnInit(): void {
  }

  onColumnsCountChange(colsNumber: number): void{
    this.cols = colsNumber
    this.rowHeight = ROWS_HEIGHT[colsNumber]
  }

  onShowCategory(newCategory: string): void{
    this.category = newCategory
  }

  onAddToCart(product: Product){
    this.CartService.addToCart({
      product: product.image,
      name: product.title,
      price: product.price,
      quantity: 1,
      id: product.id
    })
  }
}
