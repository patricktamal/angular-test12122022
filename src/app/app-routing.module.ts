import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderCheckoutComponent } from './order-checkout/order-checkout.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';

const routes: Routes = [
  {
    path: '',
    component: OrderSummaryComponent,
  },
  {
    path: 'checkout',
    component: OrderCheckoutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
