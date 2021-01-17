import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery' ;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  menuitem = "landing";
  cartstatus = '';
  constructor() { }

  ngOnInit(): void {
    $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });
  }
  setmenu(menu){
    this.menuitem = menu;
  }
  setlabel(status){
    this.cartstatus = status;
  }

}
