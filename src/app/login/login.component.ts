import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMessage: String = 'Invalid Credentials';
  userName: String = 'admin';
  password: String = 'admin';
  invalidCred: boolean = false;

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  handleLogin() {

    if (this.userName === 'admin' && this.password === 'admin') {
      this.invalidCred = false;
      this.router.navigate(['welcome' , this.userName])
      console.log('valid cred')
    }
    else{
      this.invalidCred = true;
      console.log('invalid cred')
    }
  }
}
