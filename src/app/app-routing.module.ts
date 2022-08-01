import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './layout-areas/dashboard/dashboard.component';
import { InfoComponent } from './layout-areas/info/info.component';
import { LandingComponent } from './layouts/landing/landing.component';
import { LoginComponent } from './layouts/login/login.component';
import { MainPageComponent } from './layouts/main-page/main-page.component';
import { RegisterComponent } from './layouts/register/register.component';

const routes: Routes = [
{path:'login',component: LoginComponent},
{path:'landing',component:LandingComponent},
{path:'register',component:RegisterComponent},
{path:'mainPage',component:MainPageComponent,children:[
  {path:'',component:DashboardComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'info',component:InfoComponent}

]},
{path:'',redirectTo:'login',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
