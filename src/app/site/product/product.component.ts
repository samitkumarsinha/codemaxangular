import { DataService } from './../../data.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from '../../product';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  prod: Product[];
  @Output('setlb')
  setlb = new EventEmitter();
  constructor(private ds:DataService) { }

  ngOnInit(): void {
    this.ds.productlist().subscribe((item) => {
      const mitem = item.products.map(item =>{
        item['addtocart'] = false
      });
      this.prod = item.products;
      console.log(this.prod );
    });
  }
  setlabel(modifiedprod){
    let itemcount = 0;
    let price = 0;
    this.prod.filter(item => {
      if(item['addtocart']) {
        itemcount++;
        price += item['amount'];
      }
    })
    let cartstatus = itemcount + " Items / $" + price;
    if(itemcount === 0) cartstatus = '';
    this.setlb.emit(cartstatus);
  }

}
