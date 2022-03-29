import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './components/products/add-product/add-product.component';
import { Error404Component } from './components/error404/error404.component';
import { ProductComponent } from './components/products/product/product.component';
import { LoginComponent } from './components/authentication/login/login.component';

const routes: Routes = [
  // {path: "additem", component: AddProductComponent, outlet: 'overlay'},
  {path: "home", component: ProductComponent},
  {path: "orders", redirectTo: "404"},
  {path: "tickets", redirectTo: "404"},
  {path: "products", component: ProductComponent},
  {path: "404", component: Error404Component},
  {path: "", component: LoginComponent, pathMatch: "full"}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
