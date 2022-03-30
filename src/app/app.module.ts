import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ProductComponent } from './components/products/product/product.component';
import { ItemCardComponent } from './components/products/item-card/item-card.component';
import { ProductDetailComponent } from './components/products/product-detail/product-detail.component';
import { AddProductComponent } from './components/products/add-product/add-product.component';
import { Error404Component } from './components/error404/error404.component';
import { LoginComponent } from './components/authentication/login/login.component';
import { AppMaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';
import { RegisterUserComponent } from './components/register-user/register-user.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ItemCardComponent,
    ProductDetailComponent,
    AddProductComponent,
    Error404Component,
    LoginComponent,
    RegisterUserComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule, 
    AppRoutingModule,
    NoopAnimationsModule,
    AppMaterialModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent], 
  
})
export class AppModule { } 
