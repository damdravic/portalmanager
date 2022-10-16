import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { TopHeaderComponent } from './top-header/top-header.component';
import { top } from '@popperjs/core';



@NgModule({
  declarations: [
    SidenavComponent,
    HeaderComponent,
    FooterComponent,
    TopHeaderComponent
    
  ],
  imports: [
    CommonModule,
    RouterModule
  ],exports:[
    SidenavComponent,
    HeaderComponent,
    TopHeaderComponent
  ]
})
export class SharedModule { }
