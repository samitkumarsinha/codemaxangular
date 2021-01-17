import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validator, Validators } from '@angular/forms';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  createform;
  filedata:any;
  @Output('setmenu')
  menu = new EventEmitter();
  constructor(private fb:FormBuilder, private ds:DataService) { }

  ngOnInit(): void {
    this.createform = this.fb.group({
      pname: ['',Validators.required],
      quantity: ['',Validators.required],
      description: ['',Validators.required],
      amount: ['',Validators.required],
      file: ['',Validators.required]
    })
  }
  fileEvent(e){
    this.filedata = e.target.files[0];
    console.log(this.filedata);
  }
  onsubmit(){
    const pname = this.createform.get('pname').value;
    const quantity = this.createform.get('quantity').value;
    const description = this.createform.get('description').value;
    const amount = this.createform.get('amount').value;
    console.log(this.filedata.name);


    var myFormData = new FormData();
    myFormData.append('pname', pname);
    myFormData.append('quantity', quantity);
    myFormData.append('description', description);
    myFormData.append('amount', amount);
    myFormData.append('image', this.filedata);

    return this.ds.createproduct(myFormData).subscribe((data) => {
      console.log(data);
      this.menu.emit();
    });

  }

}
