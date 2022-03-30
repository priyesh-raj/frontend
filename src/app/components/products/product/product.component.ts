import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { ProductService } from '../../../services/product-service/product.service';

import { BehaviorSubject, Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { IProduct } from 'src/app/models/product.model';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})

export class ProductComponent implements OnInit {
  _detailOverlayFlag: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
  _addProductOverlayFlag: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
  displayProduct!: IProduct 
  searchProduct = new FormControl()
  productList!: IProduct[]

  constructor(private _productService: ProductService) { }
  
  ngOnInit(): void {
    // this._productService.productList$.subscribe(prods => {
    //   this.productList = prods
    // })
    this._productService.getProductsList().subscribe({
      next: (resp: IProduct[]) => {
        this.productList = resp
      } 
    })
    // this.filterInput()
  }

  // filterInput(){
  //   this.filterOps$ =  this.searchProduct.valueChanges
  //   .pipe(
  //       startWith(''),
  //       map((a: string) : IProduct[] => {
  //         return this.filter(a)
  //   }))
  // }
  // filter(name: string): IProduct[]{
  //   return this.productList.filter(x => x.name.toLowerCase().includes(name.toLowerCase()))
  // }

  displayOverlay(eve : any) {
    
    console.log(typeof(eve))
    if (typeof (eve) == 'object') {
      this.displayProduct = eve
      this._detailOverlayFlag.next(true)
      this._addProductOverlayFlag.next(!this._detailOverlayFlag)

    } else if (eve == 'addProduct') {
      this._addProductOverlayFlag.next(true)
      this._detailOverlayFlag.next(!this._addProductOverlayFlag)
    }

  }

  hideOverlay(eve: string){

    try {
      if(eve === 'detail'){
        this._detailOverlayFlag.next(false)
        console.log(this.productList)
        // this.filterInput()
      }else if(eve === 'add'){
         this._addProductOverlayFlag.next(false) 
      }else{
        new Error('Invalid parameter passed !!') 
      } 
    } catch (error) {
      console.log(error) 
    }
  }

}
