import { EditProduct } from './components/edit-product/edit-product';
import { InsertProduct } from './components/insert-product/insert-product';
import { Login } from './components/login/login';
import { MainCombonent } from './components/main-combonent/main-combonent';
import { AboutUs } from './components/about-us/about-us';
import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Product } from './components/product/product';
import { Notfound } from './components/notfound/notfound';
import { ProductDetails } from './components/product-details/product-details';
import { UserComponent } from './components/user/user';
import { loginGuard } from './gaurds/login-guard';

export const routes: Routes = [
  {path:'',component:MainCombonent,
    children:[
      {path:'',redirectTo:"/home",pathMatch:'full'},
      {path:'home',component:Home, title:"Home Page"},
      {path:"product",component:Product,title:"Product Page",canActivate:[loginGuard]},
      {path:"about-us",component:AboutUs,title:"About Page"},
      {path:"home/:idFromDB",component:ProductDetails,title:"Product Details"},
      {path:'admin/signup',component:UserComponent,title:"Sign Up"},
      {path:'insert-product',component:InsertProduct,title:"Create New Product"},
      {path:'edit-product/:id',component:InsertProduct,title:"Edit Product"},
  ]},
  {path:'login',component:Login,title:"login"},
  {path:'**',component:Notfound}
];
