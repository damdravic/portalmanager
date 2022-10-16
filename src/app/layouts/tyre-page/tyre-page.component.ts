import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tyre-page',
  templateUrl: './tyre-page.component.html',
  styleUrls: ['./tyre-page.component.css']
})
export class TyrePageComponent implements OnInit {

  collapsed :boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

 collapse(){
  this.collapsed = !this.collapsed;
 }

}
