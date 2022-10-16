import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InfoComponent } from './info/info.component';
import { TyreShelvesComponent } from './tyre-shelves/tyre-shelves.component';



@NgModule({
  declarations: [
    DashboardComponent,
    InfoComponent,
    TyreShelvesComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    DashboardComponent, 
    InfoComponent
  ]
})
export class LayoutAreasModule { }
