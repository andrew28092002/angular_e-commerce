import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';
import { StoreService } from 'src/app/services/store.service';

const ROWS_HEIGHT: { [id: number]: number } = {
  1: 400,
  3: 335,
  4: 350,
};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  cols: number = 3;
  category: string | undefined;
  rowHeight = ROWS_HEIGHT[this.cols];
  products: Product[] | undefined
  sort: 'desc' | 'asc' = 'desc';
  count = '12';
  productsSubscription: Subscription | undefined;

  constructor(
    private CartService: CartService,
    private StoreService: StoreService
  ) {}

  ngOnInit(): void {
    this.getProducts()
  }

  ngOnDestroy(): void {
    if (this.productsSubscription){
      this.productsSubscription.unsubscribe()
    }
  }

  getProducts(){
    this.productsSubscription = this.StoreService.getAllProducts(this.count, this.sort).subscribe(_products => {
      this.products = _products 
    })
  }

  onColumnsCountChange(colsNumber: number): void {
    this.cols = colsNumber;
    this.rowHeight = ROWS_HEIGHT[colsNumber];
  }

  onShowCategory(newCategory: string): void {
    this.category = newCategory;
  }

  onAddToCart(product: Product) {
    this.CartService.addToCart({
      product: product.image,
      name: product.title,
      price: product.price,
      quantity: 1,
      id: product.id,
    });
  }
}
