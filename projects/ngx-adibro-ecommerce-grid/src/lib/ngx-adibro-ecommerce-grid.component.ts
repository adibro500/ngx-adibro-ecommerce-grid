import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ngx-adibro-ecommerce-grid',
  template: `
    <div class="wrapper">
	<div class="content">
		<!-- content here -->
		<div class="product-grid product-grid--flexbox">
			<div class="product-grid__wrapper">
				<!-- Product list start here -->
        <ng-container *ngFor="let item of items">
				<!-- Single product -->
				<div class="product-grid__product-wrapper">
					<div class="product-grid__product">
						<div class="product-grid__img-wrapper">
							<img [src]="item.image_url" alt="Img" class="product-grid__img" />
						</div>
            <span class="product-grid__title">{{item.title}}</span>
            <span class="product-grid__price">{{currencyUnicode}} {{item.price}}</span>
						<div class="product-grid__extend-wrapper">
							<div class="product-grid__extend">
								<p class="product-grid__description">{{item.desc}}</p>
	<span (click)="addToCartEvent(item)" class="product-grid__btn product-grid__add-to-cart"><i class="fa fa-cart-arrow-down"></i> {{addToCartLabel}}</span>
	<span (click)="viewMoreEvent(item)" class="product-grid__btn product-grid__view"><i class="fa fa-eye"></i> {{viewMoreLabel}} </span>
							</div>
						</div>
					</div>
				</div>
				<!-- end Single product -->
        </ng-container>
				</div>
			</div>
		</div>
</div>`,
  styleUrls: ['./commerce.scss']
})
export class NgxAdibroEcommerceGridComponent implements OnInit {
  @Input()
  items: Item[];
  @Output()
  addToCart = new EventEmitter();
  @Output()
  viewMore = new EventEmitter();
  @Input()
  currencyUnicode: any;
  @Input()
  addToCartLabel = 'Add to cart';
  @Input()
  viewMoreLabel = 'View more';


  addToCartEvent(item) {
    this.addToCart.emit({ 'id': item.id, 'item_url': item.image_url, 'price': item.price, 'title': item.title, 'desc': item.desc });
  }


  viewMoreEvent(item) {
    this.viewMore.emit({ 'id': item.id, 'item_url': item.image_url, 'price': item.price, 'title': item.title, 'desc': item.desc });
  }


  constructor() { }

  ngOnInit() {
  }

}

export class Item {
  id: any;
  title: string;
  price: number;
  desc: string;
  image_url: string;
  constructor(id, image_url, price, title, desc) {
    this.id = id;
    this.image_url = image_url;
    this.price = price;
    this.title = title;
    this.desc = desc;
  }
}
