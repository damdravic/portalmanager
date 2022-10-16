import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TiresService } from 'src/app/models-services/tires.service';
import { Shelf } from 'src/app/models/shelf';

@Component({
  selector: 'app-add-new-shelf',
  templateUrl: './add-new-shelf.component.html',
  styleUrls: ['./add-new-shelf.component.css']
})
export class AddNewShelfComponent implements OnInit {

  constructor( private activeModalService :NgbActiveModal,
               private tireService: TiresService) { }

  ngOnInit(): void {
  }

   public addNewForm(shelfForm : NgForm) : void {

    const shelfFormData = createFormData(shelfForm.value);

    this.tireService.add(shelfFormData).subscribe(
          (response:Shelf) =>{
            
          },
          (error:HttpErrorResponse) => {}

    )

   }





}
function createFormData(shelf: Shelf) : FormData {
 const fd : FormData = new FormData;

 fd.append('shelfName',shelf.shelfName);
 fd.append('location',shelf.location);
 fd.append('noc',shelf.noc.toString() );
 fd.append('nor',shelf.nor.toString());


 return fd;
}

