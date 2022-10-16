import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddNewShelfComponent } from 'src/app/modals/add-new-shelf/add-new-shelf.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


extended:boolean=false;

  constructor( private modalService : NgbModal) { }

  ngOnInit(): void {
  }

  @Output() sidebarStatus :EventEmitter<boolean> = new EventEmitter<boolean>();
  
  collapse(){
    this.sidebarStatus.emit();

  }


  addNewShelf(){
            this.modalService.open(AddNewShelfComponent,{size:'md'});
  }

  




}
