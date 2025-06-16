import { ActivatedRoute, Router } from '@angular/router';
import { APIproduct } from './../../services/apiproduct';
import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-edit-product',
  imports: [ReactiveFormsModule],
  templateUrl: './edit-product.html',
  styleUrl: './edit-product.css'
})
export class EditProduct {
  editForm:FormGroup
  productId!:string
  constructor(private productService:APIproduct,private router:Router,private fb:FormBuilder,private cdr:ChangeDetectorRef,private route:ActivatedRoute){

    this.editForm = this.fb.group({
      productName:['',Validators.required],
      productQuantity:['',Validators.required],
      productPrice:['',Validators.required],
      categoryId:['',Validators.required],
      productDetails:[''],
    });
  this.productId = this.route.snapshot.paramMap.get('id')??"0";
  if(this.productId){
    this.productService.getProductById(this.productId).subscribe((data)=>{
      this.editForm.patchValue(data);
    })
  }
  else {
    return
  }
  }
  editPro(){
    this.productService.editProduct(this.productId,this.editForm.value).subscribe({
      next:(res)=>{
        Swal.fire({
          title: "Product Updated",
          text: "You clicked the button!",
          icon: "success"
        });
        this.router.navigate(['/product']);
      }
    });
  }
}
