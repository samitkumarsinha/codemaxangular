import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { Product } from '../../product';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  products:Product[];
  records:Product;
  editrec:Product;
  constructor(private ds:DataService) { }

  ngOnInit(): void {
   this.showlist();
  }
  showlist(){
    this.ds.productlist().subscribe((item)=>{
      this.products = item.products;
    })
  }
  details(product){
    console.log(product);
    this.records = product;
    this.showlist();
  }
  edit(item){
    this.editrec = item;
    console.log(this.editrec);
    this.showlist();
  }
  update(item){
    this.ds.updateproduct(item).subscribe((item)=>{
      console.log(item);
      this.showlist();
    })
  }
}
