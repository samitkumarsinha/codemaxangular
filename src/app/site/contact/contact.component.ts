import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validator, Validators } from '@angular/forms';
import { DataService } from '../../data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactform;
  constructor(private fb:FormBuilder, private ds:DataService, private router:Router) { }

  ngOnInit(): void {
    this.contactform = this.fb.group({
      email: ['',Validators.required],
      message: ['',Validators.required],
    })
  }
  onsubmit(){
    const email = this.contactform.get('email').value;
    const message = this.contactform.get('message').value;
    const data = {'email': email, 'message': message};
    this.ds.contactmsg(data).subscribe((data)=>{
      console.log(data);
      this.router.navigate(['home']);
    })
  }

}
