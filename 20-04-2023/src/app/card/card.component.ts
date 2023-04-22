import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  types=[
    "All",
    "Electronics",
    "Cosmetics",
    "Groceries",
    "Books"
  ]
  selected="All";
  prodlist:any;
  min_v=500;
  max_v=5000;
  constructor(ps:ProductService){
    ps.getProducts().subscribe(
      {
        next: (data:any) => this.prodlist = data,
        error:()=>this.prodlist = []
      }
    )
  }
}