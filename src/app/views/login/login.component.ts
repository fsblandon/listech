import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Router } from '@angular/router';

import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  user: any[] = [];

  connect = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: Router,
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });

    this.loginService.token = localStorage.getItem('token');

    if (this.loginService.token !== null) {
      this.route.navigateByUrl('listech');
    }
  }

  login(): void {

    this.loginService.login(
        this.loginForm.value.email,
        this.loginForm.value.password
      ).subscribe(
        (response) => {
          if (this.connect) {
            localStorage.setItem('token',  response.token);
            this.loginService.token = localStorage.getItem('token');
            this.route.navigateByUrl('listech');
          } else {
            if (this.loginService.token !== null) {
              localStorage.removeItem('token');
            }
            this.route.navigateByUrl('login');
          }
          this.loginForm.reset();
        },
        (error) => {
          console.log(error);
          this.loginService.token = null;
          localStorage.removeItem('token');
        }
      );
  }

  changeConnect(): void {
    if (this.connect) {
      this.connect = false;
    } else {
      this.connect = true;
    }
  }

}
