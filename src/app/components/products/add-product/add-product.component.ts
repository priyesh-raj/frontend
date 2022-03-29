import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IProduct } from 'src/models/product.model';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  
  @Output() close : EventEmitter<boolean> = new EventEmitter()
  
  itemDetail = new FormGroup({
    name: new FormControl(),
    category: new FormControl(),
    rate: new FormControl(),
    quantity: new FormControl(),
    desc: new FormControl()    
  })
  constructor() { }

  ngOnInit(): void {
  }

  closeOverlay(){
    this.close.emit()
  }
  onSubmit(){
    console.log(this.itemDetail)
  }

}
