import { Footer } from './../footer/footer';
import { Nav } from './../nav/nav';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-combonent',
  imports: [RouterOutlet,Nav,Footer],
  templateUrl: './main-combonent.html',
  styleUrl: './main-combonent.css'
})
export class MainCombonent {

}
