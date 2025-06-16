import { Component, HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from "../product/product";
import { Iproduct } from '../../models/iproduct';

@Component({
  selector: 'app-home',
  imports: [FormsModule, Product],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  filterByTitle!:string
  productCart:Iproduct[]=[]
  addToCart(obj:Iproduct){
    let product = this.productCart.find((p)=>{
      return p.id==obj.id
    })
    if(product){
      product.productQuantity++
      product.productPrice+=obj.productPrice
    }else {
      this.productCart.push({...obj,productQuantity:1});
    }
    console.log(this.productCart)
  }
  removeItem(id:string){
    this.productCart=this.productCart.filter((p)=>{
      return p.id!=id;
    })
  }
}
