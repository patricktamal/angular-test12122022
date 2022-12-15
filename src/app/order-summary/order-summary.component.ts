import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TAX } from 'src/data/params';
import { product, productDatas } from '../../data/products';
import '../../web-components/card-details/card-details';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.scss'],
})
export class OrderSummaryComponent {
  constructor(private router: Router) {}
  products: product[] = productDatas;

  subTotal: number = this.products
    .map((prod) => prod.price)
    .reduce((prev, curr) => prev + curr);

  tax = (this.subTotal * TAX) / 100;

  clickEvent = () => this.router.navigateByUrl('/checkout');
}
