import { Observable } from 'rxjs';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iproduct } from '../../models/iproduct';
import { APIproduct } from '../../services/apiproduct';
import { JsonPipe } from '@angular/common';


@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css'
})
export class ProductDetails implements OnInit {
  currerntId!:string
  product!:Iproduct
  productIds:string[]=[]
  myIndex!:number
  constructor(
    private active:ActivatedRoute,
    private ProductFromService:APIproduct,
    private router:Router,
    private cdr:ChangeDetectorRef){
  }
  ngOnInit(): void {
        // observable Route
    this.active.paramMap.subscribe((data)=>{
      this.currerntId= data.get('idFromDB')??"";
      let product = this.ProductFromService.getProductById(this.currerntId);
      if(product){
        product.subscribe((data)=>{
          this.product=data;
          this.cdr.detectChanges()
        })
      }else {
        this.router.navigate(['**']);
      }
    })
    this.ProductFromService.getAllProducts().subscribe((data)=>{
      this.productIds = data.map((p)=>(p.id));
      this.cdr.detectChanges()
    })

  }
  previous(){
    this.myIndex=this.productIds.indexOf(this.currerntId);

    this.router.navigate(['home/',this.productIds[--this.myIndex]])
    console.log(this.myIndex);
  }
  next(){
    this.myIndex=this.productIds.indexOf(this.currerntId);
    this.router.navigate(['home/',this.productIds[++this.myIndex]])
    console.log(this.myIndex);
  }
}
