import { Component, Input, OnInit, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from 'src/models/product.model';



@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemCardComponent implements OnInit {
  @Input() item!: IProduct
  @Output() showDetail: EventEmitter<IProduct> = new EventEmitter()
  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log(this.item)
  }

  viewDetails(){
    // this.router.navigate(['/product'],
    //   {
    //     queryParams: {product: this.item._id}
    //   }
    // )
    this.showDetail.emit(this.item)
  }
}
