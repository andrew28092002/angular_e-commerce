import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  cols: number = 3;

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onColumnsCountChange(colsNumber: number): void{
    this.cols = colsNumber
  }

}
