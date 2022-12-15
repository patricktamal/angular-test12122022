import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { TAX, TIPS } from 'src/data/params';
import { product, productDatas } from 'src/data/products';

@Component({
  selector: 'app-order-checkout',
  templateUrl: './order-checkout.component.html',
  styleUrls: ['./order-checkout.component.scss'],
})
export class OrderCheckoutComponent {
  constructor(private location: Location) {}

  products: product[] = productDatas;

  subTotal: number = this.products
    .map((prod) => prod.price)
    .reduce((prev, curr) => prev + curr);

  tax = (this.subTotal * TAX) / 100;

  tips = (this.subTotal * TIPS) / 100;

  goBack = () => this.location.back();
}
