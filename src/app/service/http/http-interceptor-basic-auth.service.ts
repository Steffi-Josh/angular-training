import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BasicAuthService } from '../basic-auth.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorBasicAuthService implements HttpInterceptor {
  //Access to XMLHttpRequest at 'http://localhost:4040/jpa/users/admin/todos' from 
  //origin 'http://localhost:4200' has been blocked by CORS policy:
  // No 'Access-Control-Allow-Origin' header is present on the requested resource.
  constructor(private basicAuthService : BasicAuthService) { }
  intercept(request: HttpRequest<any>, next: HttpHandler) {
    // let userName = 'admin'
    // let password = 'admin'
    // let basicAuthHeaderString = 'Basic ' + window.btoa(userName + ':' + password);
  //  let basicAuthHeaderString : string;
  //   if(this.basicAuthService.getAuthenticatedToken() != null){
  //      basicAuthHeaderString  = this.basicAuthService.getAuthenticatedToken() as string;
  //   }
   
    let basicAuthHeaderString  = this.basicAuthService.getAuthenticatedToken() as string;
    let userName = this.basicAuthService.getAuthenticatedUser() ;

    request = request.clone({
      setHeaders: {
        Authorization: basicAuthHeaderString
      }
    })
    return next.handle(request);
  }
}
