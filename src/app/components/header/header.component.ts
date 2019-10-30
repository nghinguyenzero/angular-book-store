import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public error = 0;
  constructor(public router: Router) { }

  ngOnInit() {
  }
  onLogOut() {
    if (localStorage.getItem('user')) {
        localStorage.removeItem('user');
        this.router.navigate(['']);
    } else {
      this.error = -1;
    }
  }
}
