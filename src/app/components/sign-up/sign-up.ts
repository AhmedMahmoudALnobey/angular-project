import { UserApi } from './../../services/user-api';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Iuser } from '../../models/iuser';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  imports: [FormsModule,CommonModule],
  templateUrl: './sign-up.html',
  styleUrl: './sign-up.css'
})
export class SignUp {
  userPro:Iuser = { fname: '', email: '', password: '', mobiles: [''] };
  constructor(private router:Router){}
  userService = inject(UserApi);

  addMobile() {
    this.userPro.mobiles.push('');
  }

  removeMobile(index: number) {
    if (this.userPro.mobiles.length > 1) {
      this.userPro.mobiles.splice(index, 1);
    }
  }

  signUp(){
    this.userService.addNewUser(this.userPro).subscribe((data)=>{
      console.log(data);
      this.router.navigate(['/product']);
    });
  }
}
