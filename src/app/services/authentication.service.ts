import { EnvironmentInjector, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public host = environment.upiUrl;
  public token: string;
  private loggedInUsername: string;
  private jwtHelper = new JwtHelperService;



  constructor(private http: HttpClient) { }


  public login(user: User): Observable<HttpResponse<any> | HttpErrorResponse> {
    return this.http.post<HttpResponse<User>> (`${this.host}/user/login`, user,{observe : 'response'});
  }


  public register(user: User): Observable<HttpResponse<User> | HttpErrorResponse> {
    return this.http.post<HttpResponse<User>>(`${this.host}/user/register`, user);
  }


  public logout(): void {
    this.token = "";
    this.loggedInUsername = "";
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    localStorage.removeItem('users');

  }

  public saveToken(token: string) {
    this.token = token;
    localStorage.setItem('token', token);
  }

  public addUserToLocalCache(user: User) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  public getUserFromLocalCache(): User {
    return JSON.parse(localStorage.getItem('user'));
  }

  public loadToken(): void {
    this.token =  localStorage.getItem('token') || '{}';
  }

  public getToken():string {
    return this.token;
  }

  public isUserLoggedIn(): boolean {
    this.loadToken();
    console.log("this.token =>" + this.token);
   
    if(this.token != null && this.token !=''){
      if(this.jwtHelper.decodeToken(this.token).sub != null){
        if(!this.jwtHelper.isTokenExpired(this.token)){
          this.loggedInUsername = this.jwtHelper.decodeToken(this.token).sub;
          return true;
        }
      }
    }else{
      this.logout();
      return false;
    }
    
  }


}
