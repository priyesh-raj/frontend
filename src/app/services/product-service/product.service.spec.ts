import { TestBed } from '@angular/core/testing';

import { ProductService } from './product.service';
import products from '../../../assets/items.json'; 


describe('ProductService', () => {
  let service: ProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get product list', (done: DoneFn ) => {
    // let ls = service.getProduct()
    service.getProduct().subscribe(prods => {
      expect(prods).toBe(products)
      done();
    })
  })
});
