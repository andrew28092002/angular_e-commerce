import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  cols: number = 3;
  category: string | undefined;

  ngOnInit(): void {
  }

  onColumnsCountChange(colsNumber: number): void{
    this.cols = colsNumber
  }

  onShowCategory(newCategory: string): void{
    this.category = newCategory
  }
}
