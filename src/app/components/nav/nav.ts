import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { UserAuth } from '../../services/user-auth';

@Component({
  selector: 'app-nav',
  imports: [RouterModule],
  templateUrl: './nav.html',
  styleUrl: './nav.css'
})
export class Nav {
  isUserLogin!:boolean
  constructor(private router:Router){
    this.userService.userLoggedin().subscribe((data)=>{
      this.isUserLogin=data;
    })
  }

  userService = inject(UserAuth)
  logout(){
    this.userService.logout();
    this.router.navigate(['/login']);
    this.isUserLogin = this.userService.isUserLogin
  }
}
