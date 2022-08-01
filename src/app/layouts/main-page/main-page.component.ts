import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

collapsed :boolean = false;


  constructor() { }

  ngOnInit(): void {
  }
  collapse(){
    this.collapsed = !this.collapsed;
  }


}

