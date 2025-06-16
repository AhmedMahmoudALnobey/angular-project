import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserAuth } from '../../services/user-auth';
import { Footer } from "../footer/footer";

@Component({
  selector: 'app-login',
  imports: [FormsModule,CommonModule, Footer],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  userService = inject(UserAuth);
  isUserLogin:boolean=false;
  email: string = '';
  password: string = '';
  constructor(private router:Router){}

  login(){
    this.userService.Login();
    this.router.navigate(['/home']);
    this.isUserLogin = this.userService.isUserLogin;
  }
}
