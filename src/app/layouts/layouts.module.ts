import { EventEmitter, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { MatSidenavModule} from '@angular/material/sidenav';
import { LandingComponent } from './landing/landing.component';
import { RegisterComponent } from './register/register.component';
import { MainPageComponent } from './main-page/main-page.component';
import { LayoutAreasModule } from '../layout-areas/layout-areas.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { TyrePageComponent } from './tyre-page/tyre-page.component';



@NgModule({
  declarations: [
    LoginComponent,
    LandingComponent,
    RegisterComponent,
    MainPageComponent,
    TyrePageComponent
  ],
  imports: [
    CommonModule,
    LayoutAreasModule,
    FormsModule,
    MatSidenavModule,
    RouterModule,
    SharedModule

  ],exports:[
    LoginComponent
  ]
})
export class LayoutsModule { }
