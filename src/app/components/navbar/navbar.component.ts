import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  token: string;

  constructor(
    private router: Router,
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
    this.loginService.token = localStorage.getItem('token');
    this.token = this.loginService.token;
  }

  goToHome(): void {
    this.router.navigateByUrl('/home');
  }

  goToLogin(): void {
    this.router.navigateByUrl('/login');
  }

}
