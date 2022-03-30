import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { map, retry } from 'rxjs/operators';

import products from '../../../assets/items.json'; 
import { HttpClient } from '@angular/common/http';
import { GET_PRODUCT } from 'src/app/constants/products';
import { IProduct } from 'src/app/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // productList: IProduct[]
  productList$: BehaviorSubject<IProduct[]>

  constructor(private _http: HttpClient) {
    this.productList$ = new BehaviorSubject<IProduct[]>(products)
  }

  getProduct(){
    return this.productList$
  }

  getProductsList(): Observable<IProduct[]> {
    return this._http.get<IProduct[]>(GET_PRODUCT).pipe(
      retry(1)
    )
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
