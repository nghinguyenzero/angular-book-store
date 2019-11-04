import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  public error = 0;

  constructor( public router: Router ) { }

  ngOnInit() {
    this.checkLogin();
  }

  checkLogin() {
    if (localStorage.getItem('user')) {
        this.router.navigate(['']);
    }
  }

  onLogin(username: string, password: string) {
    const user = {
      username,
      password
    };
    if (username === 'admin' && password === 'admin') {
      localStorage.setItem('user', JSON.stringify(user));
      this.router.navigate(['/books']);
    } else {
      this.error = -1;
    }
  }

}
