import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HeaderType } from 'src/app/enum/header-type';
import { NotificationType } from 'src/app/enum/notification-type';
import { User } from 'src/app/models/user';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,
    private authenticationService :AuthenticationService,
    private notificationservice : NotificationService) { }

  ngOnInit(): void {
    if(this.authenticationService.isUserLoggedIn()){
      console.log("isUserLoggedIn " + this.authenticationService.isUserLoggedIn())
      this.router.navigateByUrl('/landing')
    }

  }

  onLogin(user : User) : void {
   this.authenticationService.login(user).subscribe(
    (response : HttpResponse<User> )=>{

      const token = response.headers.get(HeaderType.JWT_TOKEN);
      this.authenticationService.saveToken(token);
      this.authenticationService.addUserToLocalCache(response.body);
      this.router.navigateByUrl('/landing');
    },(error:HttpErrorResponse) =>{
      this.sendErrorNotification(NotificationType.ERROR,error.error.message)
    })
  }



  sendErrorNotification(notificationType : NotificationType, message: string):void {
    if(message){
      this.notificationservice.myNotify(notificationType,message)
    }else{
      this.notificationservice.myNotify(notificationType,"AN ERROR OCCURED.PLEASE TRY AGAIN-THIS IS A GENERAL MESSAGE")
    }
    
  }

}
