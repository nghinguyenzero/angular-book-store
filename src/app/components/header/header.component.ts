import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // public error = 0;
  public isLogin = false;
  constructor(public router: Router) { }

  ngOnInit() { if (localStorage.getItem('user')) {
    this.isLogin = true;
  }
  }
  onLogOut() {
    if (localStorage.getItem('user')) {
        localStorage.removeItem('user');
        this.router.navigate(['']);
      this.isLogin = false;

    } else {
      // this.error = -1;
      // this.isLogin = false;
    }
  }
}
