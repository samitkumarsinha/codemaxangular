import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery' ;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  menuitem = "create";
  constructor() { }

  ngOnInit(): void {
    $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });
  }
  create(){
    this.menuitem = "create";
  }
  list(){
    this.menuitem = "list";
  }
  setmenu(){
    this.menuitem = "list";
  }
}
