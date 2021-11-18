import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { API_URL } from '../app.constants';

export const TOKEN = 'token'
export const AUTHENTICATED_USER = 'authenticaterUser'

@Injectable({
  providedIn: 'root'
})
export class BasicAuthService {

  constructor(private http: HttpClient) { }


  executeAuthenticationService(userName: string,password: string) {
    
    let basicAuthHeaderString = 'Basic ' + window.btoa(userName + ':' + password);

    let headers = new HttpHeaders({
        Authorization: basicAuthHeaderString
      })

    return this.http.get<AuthenticationBean>(
      `${API_URL}/basicauth`,
      {headers}).pipe(
        map(
          data => {
            sessionStorage.setItem(AUTHENTICATED_USER, userName);
            sessionStorage.setItem(TOKEN, basicAuthHeaderString);
            return data;
          }
        )
      );
    //console.log("Execute Hello World Bean Service")
  }

  getAuthenticatedUser() {
    return sessionStorage.getItem(AUTHENTICATED_USER)
  }

  getAuthenticatedToken(){
       if(this.getAuthenticatedUser())
      return sessionStorage.getItem(TOKEN)
  }

  IsUserLoggedIn(){
   let user =  sessionStorage.getItem(AUTHENTICATED_USER)
   return (!(user === null));

  }

  logoutUser(){
    sessionStorage.removeItem(AUTHENTICATED_USER)
    sessionStorage.removeItem(TOKEN)
  }
}

export class AuthenticationBean{
  constructor(public message:string) { }
}