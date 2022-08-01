import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InfoComponent } from './info/info.component';



@NgModule({
  declarations: [
    DashboardComponent,
    InfoComponent
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
