import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { UserApi } from '../../services/user-api';
import { Iuser } from '../../models/iuser';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class UserComponent {
  user: Iuser = { fname: '', email: '', password: '', mobiles: [''] };
  constructor(private userService: UserApi, private router: Router) {}

  addMobile() {
    this.user.mobiles.push('');
  }

  removeMobile(index: number) {
    if (this.user.mobiles.length > 1) {
      this.user.mobiles.splice(index, 1);
    }
  }

  adduser() {
    this.userService.addNewUser(this.user).subscribe(() => {
      this.router.navigate(['/product']);
    });
  }
}
