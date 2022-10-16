import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LayoutsModule } from './layouts/layouts.module';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticationService } from './services/authentication.service';
import { NotifierModule } from 'angular-notifier';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddNewShelfComponent } from './modals/add-new-shelf/add-new-shelf.component';




@NgModule({
  declarations: [
    AppComponent,
    AddNewShelfComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    LayoutsModule,
    MatSidenavModule,
    HttpClientModule,NotifierModule, BrowserAnimationsModule
  ],
  providers:[
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
