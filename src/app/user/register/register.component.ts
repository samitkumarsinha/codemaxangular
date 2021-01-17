import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../../data.service';
import { Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  regform;
  errmsg='';
  constructor(private fb:FormBuilder, private ds:DataService, private router : Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.regform = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      cpassword: ['', Validators.required],
    })
  }
  onregister(){
    const username = this.regform.get('username').value;
    const email = this.regform.get('email').value;
    const password = this.regform.get('password').value;
    const cpassword = this.regform.get('cpassword').value;
    if(password !== cpassword) {
      this.toastr.error('Password Mismatch');
      this.errmsg = 'Password Mismatch';
      return;
    }else{
      this.errmsg = '';
    }
    const data = {'name': username, 'email': email, 'password': password};
    this.ds.register(data).subscribe((item) => {
      console.log(item);
      this.toastr.success('Successfully Registered');
      this.router.navigate(['/admin/login']);
    })
  }
}
