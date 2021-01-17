import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Product } from '../../product';
@Component({
  selector: 'app-prodcard',
  templateUrl: './prodcard.component.html',
  styleUrls: ['./prodcard.component.css']
})
export class ProdcardComponent implements OnInit {
  @Input()
  prod:Product;
  @Output('setlabel')
  setlabel = new EventEmitter();
  button_label = 'Add To Cart';
  add_to_cart:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  addtocart(){
    this.prod['addtocart'] = !this.prod['addtocart'];
    this.button_label = this.prod['addtocart'] ? 'Remove From Cart' : 'Add To Cart';
    console.log(this.prod);
    this.setlabel.emit(this.prod);
  }

}
