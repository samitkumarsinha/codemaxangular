import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../product';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input()
  product:Product;
  @Output('details')
  detail = new EventEmitter();
  editrec:Product;
  positivechange:boolean = true;
  constructor(private ds:DataService) { }

  ngOnInit(): void {

  }
  details(){
    this.detail.emit(this.product);
  }
  del(item){
    this.ds.delproduct(item.id).subscribe((item)=>{
      console.log(item);
      this.detail.emit();
    })
  }
  edit(item){
    this.editrec = item;
    console.log(this.editrec);
    this.positivechange = true;
  }
  update(item){
    this.ds.updateproduct(item).subscribe((item)=>{
      console.log(item);
      this.detail.emit();
    })
  }
  showlist(){
    this.detail.emit();
  }
  close(){
    this.positivechange = false;
  }

}
