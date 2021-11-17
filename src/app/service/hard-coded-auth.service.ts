import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardCodedAuthService {

  constructor() { }

  authenticate(userName: string,password: string){
   // console.log(this.IsUserLoggedIn());
    if(userName === 'admin' && password === 'admin'){
      sessionStorage.setItem('authendicatedUser',userName);
     // console.log(this.IsUserLoggedIn());
      return true;
    }
    else{
      return false;
    }
  }

  IsUserLoggedIn(){
   let user =  sessionStorage.getItem('authendicatedUser')
   return (!(user === null));

  }

  logoutUser(){
    sessionStorage.removeItem('authendicatedUser')
  }
}
