import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IProduct } from 'src/models/product.model';

import { map } from 'rxjs/operators';

import products from '../../../assets/items.json'; 
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // productList: IProduct[]
  productList$: BehaviorSubject<IProduct[]>

  constructor() {
    this.productList$ = new BehaviorSubject<IProduct[]>(products)
  }

  getProduct(){
    return this.productList$
  }

  saveProduct(item: IProduct){
    let index = products.findIndex(x => x._id == item._id)
    // let savedArray = products
    // savedArray[index] = item
    let savedArray: IProduct[] = [...products]
    savedArray.splice(index, 1, item)
    console.log(savedArray)
    this.productList$.next(savedArray)
  }
}
