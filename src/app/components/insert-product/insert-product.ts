import { APIproduct } from './../../services/apiproduct';
import { Router, ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CategoryService } from '../../services/category.service';
import { Icategory } from '../../models/icategory';
import { Iproduct } from '../../models/iproduct';
import Swal from 'sweetalert2'
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-insert-product',
  imports: [ReactiveFormsModule],
  templateUrl: './insert-product.html',
  styleUrl: './insert-product.css'
})
export class InsertProduct {
  createForm:FormGroup;
  categories: Icategory[] = [];
  product: Iproduct = {
    id: '',
    productName: '',
    productQuantity: 0,
    productPrice: 0,
    productImgUrl: '',
    categoryId: 0,
    productDetails: ''
  };
  isEdit: boolean = false;
  constructor(private router:Router,private fb:FormBuilder,private productService:APIproduct, private categoryService: CategoryService, private route: ActivatedRoute, private snackBar: MatSnackBar){
    this.createForm=this.fb.group({
      id:[this.product.id,Validators.required],
      productName:[this.product.productName,Validators.required],
      productQuantity:[this.product.productQuantity,Validators.required],
      productPrice:[this.product.productPrice,Validators.required],
      productImgUrl:[this.product.productImgUrl,Validators.required],
      categoryId:[this.product.categoryId,Validators.required],
      productDetails:[this.product.productDetails,Validators.required],
    })
    this.categoryService.getCategories().subscribe(cats => this.categories = cats);
    this.createForm.valueChanges.subscribe(val => this.product = val);

    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.isEdit = true;
        this.productService.getProductById(id).subscribe(prod => {
          this.product = prod;
          this.createForm.patchValue(prod);
        });
      }
    });
  }
  insertPro(){
    if (this.isEdit) {
      this.productService.editProduct(this.product.id, this.product).subscribe({
        next: (res) => {
          this.snackBar.open('Product updated successfully!', 'Close', { duration: 2000, panelClass: 'mat-toolbar' });
          this.router.navigate(['/order'])
        }
      });
    } else {
      this.productService.insertProduct(this.product).subscribe({
        next:(res)=>{
          this.snackBar.open('Product created successfully!', 'Close', { duration: 2000, panelClass: 'mat-toolbar' });
          this.router.navigate(['/order'])
        }
      });
    }
  }
}
