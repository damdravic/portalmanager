import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationType } from 'src/app/enum/notification-type';
import { User } from 'src/app/models/user';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authenticationService : AuthenticationService,
               private router : Router,
               private notificationservice : NotificationService) { }

  ngOnInit(): void {
  }

  onRegister(user : User):void{ 
    this.authenticationService.register(user).subscribe({
      next: () => { 
        this.sendErrorNotification(NotificationType.SUCCESS,"USER ADDED SUCCESSIFULLY");
        this.router.navigateByUrl("login");
        
      },
      error: (error) => {
        this.sendErrorNotification(NotificationType.ERROR,error.error.message)
       },    
        
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
