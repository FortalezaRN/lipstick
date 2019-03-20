import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  activated = true;

  constructor(private router: Router) { }

  ngOnInit() {
  }
  
  signin() {
    this.activated = true;
  }

  signout() {
    this.activated = false;
  }

  login() {
    this.router.navigateByUrl('/home')
  }
}
