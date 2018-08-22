# ngx-adibro-ecommerce-grid for Angular 5+

This is an angular component for flipkart like grid.

# For demos please visit 

[demos](http://ambiguous-bean.surge.sh/)


## Installation
```
npm install --save ngx-adibro-ecommerce-grid
```

## Usage

### Inside app.module file import the module:

```
import { NgxAdibroEcommerceGridModule } from 'ngx-adibro-ecommerce-grid';

@NgModule({
  declarations: [
   ...
  ],
  imports: [
    ...,
    NgxAdibroEcommerceGridModule,
    ...
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


```
### In your HTML file you can do:

```
<ngx-adibro-ecommerce-grid [items]="items" (addToCart)="addToCartItem($event)" (viewMore)="viewMoreItem($event)"></ngx-adibro-ecommerce-grid>

```
### You can then access the value of the grid items in your component like so:

```
addToCartItem(event: any) {
    console.log(event);
  }

  viewMoreItem(event: any) {
    console.log(event);
  }
```

## The items input is an array of Items each having following properties:

```
1. id : any 
2. image_url : string
3. desc : desciption of product 
4. title: label of the product
5. price: the price of the product

example items array:

 this.items = [{
      id: 1,
      price: 20.5,
      image_url: 'https://images.apple.com/euro/macbook/a/screens/specs/images/finish_silver_large.jpg',
      title: 'xyz',
      desc: 'abc'
    }, {
      id: 2,
      price: 24.5,
      title: 'xyz',
      image_url: 'https://images.apple.com/euro/macbook/a/screens/specs/images/finish_silver_large.jpg',
      desc: 'abc'
    }, {
      id: 3,
      price: 29.5,
      title: 'xyz',
      image_url: 'https://images.apple.com/euro/macbook/a/screens/specs/images/finish_silver_large.jpg',
      desc: 'abcd'
    }, {
      id: 4,
      price: 22.5,
      title: 'xyz',
      image_url: 'https://images.apple.com/euro/macbook/a/screens/specs/images/finish_silver_large.jpg',
      desc: 'asdf'
    },  {
      id: 5,
      price: 25.5,
      title: 'abc',
      image_url: 'https://images.apple.com/euro/macbook/a/screens/specs/images/finish_silver_large.jpg',
      desc: 'xyz'
    },  {
      id: 6,
      price: 30.5,
      title: 'kio',
      image_url: 'https://images.apple.com/euro/macbook/a/screens/specs/images/finish_silver_large.jpg',
      desc: 'lop'
    }], 


```
## That's it

Have fun !!!
