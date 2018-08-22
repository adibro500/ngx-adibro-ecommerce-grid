import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  items: any[] = [];

  title = 'ngx-adibro-product-table';

  constructor() {
    this.items = [{
      id: 1,
      price: 24.5,
      image_url: 'https://images.apple.com/euro/macbook/a/screens/specs/images/finish_silver_large.jpg',
      title: 'hcsdhhsb',
      desc: 'hjhhjbh dhhcuivhih yagecysgv gfv yugauycgyudgcyu uyasgcyugucyguydcgyudcgyugdyugcyusdgcuysdgcu'
    }, {
      id: 2,
      price: 24.5,
      title: 'hjhhjbh',
      image_url: 'https://images.apple.com/euro/macbook/a/screens/specs/images/finish_silver_large.jpg',
      desc: 'hjjhhbhb'
    }, {
      id: 3,
      price: 24.5,
      title: 'hjhhjbh',
      image_url: 'https://images.apple.com/euro/macbook/a/screens/specs/images/finish_silver_large.jpg',
      desc: 'hjjhhbhb'
    }, {
      id: 4,
      price: 24.5,
      title: 'hjhhjbh',
      image_url: 'https://images.apple.com/euro/macbook/a/screens/specs/images/finish_silver_large.jpg',
      desc: 'hjjhhbhb'
    },  {
      id: 5,
      price: 24.5,
      title: 'hjhhjbh',
      image_url: 'https://images.apple.com/euro/macbook/a/screens/specs/images/finish_silver_large.jpg',
      desc: 'hjjhhbhb'
    },  {
      id: 4,
      price: 24.5,
      title: 'hjhhjbh',
      image_url: 'https://images.apple.com/euro/macbook/a/screens/specs/images/finish_silver_large.jpg',
      desc: 'hjjhhbhb'
    },  {
      id: 4,
      price: 24.5,
      title: 'hjhhjbh',
      image_url: 'https://images.apple.com/euro/macbook/a/screens/specs/images/finish_silver_large.jpg',
      desc: 'hjjhhbhb'
    },  {
      id: 4,
      price: 24.5,
      title: 'hjhhjbh',
      image_url: 'https://images.apple.com/euro/macbook/a/screens/specs/images/finish_silver_large.jpg',
      desc: 'hjjhhbhb'
    }]
  }

  addToCartItem(event: any) {
    console.log(event);
  }

  viewMoreItem(event: any) {
    console.log(event);
  }
}
