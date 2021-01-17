import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { FormBuilder, Validator, Validators } from '@angular/forms';
import { DataService } from '../../data.service';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit, OnChanges {
  updateform;
  @Input('product')
  product;
  @Output('list')
  list = new EventEmitter();
  @Output('closeclick')
  close = new EventEmitter();
  recs;
  product_name;
  quantity;
  description;
  amount;
  constructor(private fb:FormBuilder, private ds:DataService) {
    this.updateform = this.fb.group({
      product_name: ['',Validators.required],
      quantity: ['',Validators.required],
      description: ['',Validators.required],
      amount: ['',Validators.required],
    })
  }

  ngOnInit(): void {
  }
  ngOnChanges(){
    this.recs = this.product;
    this.product_name = this.recs.pname;
    this.quantity = this.recs.quantity;
    this.description = this.recs.description;
    this.amount = this.recs.amount;
    this.updateform.get('product_name').setValue(this.product_name);
    this.updateform.get('quantity').setValue(this.quantity);
    this.updateform.get('description').setValue(this.description);
    this.updateform.get('amount').setValue(this.amount);
  }
  onsubmit(){
    this.product_name = this.updateform.get('product_name').value;
    this.quantity = this.updateform.get('quantity').value;
    this.description = this.updateform.get('description').value;
    this.amount = this.updateform.get('amount').value;
    const data = {'pname': this.product_name, 'quantity': this.quantity, 'description': this.description,'amount': this.amount, 'id': this.product.id};
    console.log(data);
    this.ds.updateproduct(data).subscribe((res)=>{
      console.log(res);
      this.list.emit();
    })
  }
  onChange(event: any) {
    this.product_name = event.target.value;
    console.log("New value = " + this.product_name)
  };
  closeedit(){
    this.close.emit();
  }
}
