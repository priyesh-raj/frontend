import { Component, ElementRef, Input, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/models/product.model';
import { ProductService } from '../../../services/product-service/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  // @ViewChild('overlay') elRef!: ElementRef<HTMLElement>
  readonlyMode: boolean = true
  @Input() item!: IProduct
  @Output() close: EventEmitter<boolean> = new EventEmitter()
  itemDetail!: FormGroup
  
  constructor(private router: Router,
    private _productService: ProductService)
  
  {  }
  
  
  ngOnInit(): void {

    this.itemDetail = new FormGroup({
      // _id: new FormControl({value: this.item._id, disabled: true}),
      _id: new FormControl(this.item._id),
      name: new FormControl(this.item.name),
      category: new FormControl(this.item.category),
      rate: new FormControl(this.item.rate),
      quantity: new FormControl(this.item.quantity),
      desc: new FormControl(this.item.desc)    
    })
  }
  onClose(){
    // this.elRef.nativeElement.style.display = 'none'
    this.close.emit(true)
  }
  onSubmit(){
    console.log("Form Value",{...this.itemDetail.value, img: this.item.img})
    this._productService.saveProduct({...this.itemDetail.value, img: this.item.img})
    this.onClose()
  }
}
