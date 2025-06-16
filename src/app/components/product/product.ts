import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, OnInit } from '@angular/core';
import { Store } from '../../models/store';
import { Iproduct } from '../../models/iproduct';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductCard } from '../../directves/product-card';
import { Router, RouterModule } from '@angular/router';
import { APIproduct } from '../../services/apiproduct';
import { ChangeDetectorRef } from '@angular/core';
import Swal from 'sweetalert2';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-product',
  imports: [CommonModule, FormsModule, ProductCard,RouterModule],
  templateUrl: './product.html',
  styleUrl: './product.css'
})
export class Product implements OnInit {
  productAfterSearch!:Iproduct[];

  constructor(private productsStatic:APIproduct,private cdr:ChangeDetectorRef,private router:Router, private snackBar: MatSnackBar){}
  ngOnInit(){
    this.productsStatic.getAllProducts().subscribe({
      next : (res)=>{
        this.productAfterSearch = res;
        this.cdr.detectChanges();
      },
      error : (err)=>{
        console.error("Error Fetching Proudct",err)
      }
    })

  }
  clientName:string="Sherif"
  isProchasse:boolean=false
  cardId:string = ''
  totalPrice:number=0
  Date:Date=new Date
  creditNumber:string='0000000000000000'
  productData:Store = new Store (
    "Phone",
    ["Sohag","Cairo","Giza"],
    "https://m.media-amazon.com/images/I/617ZhMUCvIL._AC_SX522_.jpg"
  );
  @Output() proProperty:EventEmitter<Iproduct> = new EventEmitter<Iproduct>
  purchase(obj:Iproduct){
    this.isProchasse=true
    this.cardId=obj.id
    obj.productQuantity -=1
    this.totalPrice+=obj.productPrice
    this.proProperty.emit(obj)
  }
  @Input() set filterByTitle (searchValue:string) {
    // this.productAfterSearch=this.productsStatic.searchMethod(searchValue);
  }
  editProduct(id:string){
    this.router.navigate([`/edit-product/${id}`]);
  }

  deleteProduct(id:string){
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this product!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.isConfirmed) {
        this.productsStatic.deleteProduct(id).subscribe(() => {
          this.productAfterSearch = this.productAfterSearch.filter((p) => p.id != id);
          this.snackBar.open('Product deleted successfully!', 'Close', { duration: 2000, panelClass: 'mat-toolbar' });
        });
      }
    });
  }
}
