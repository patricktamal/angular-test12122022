import {
  NgModule,
  CUSTOM_ELEMENTS_SCHEMA,
  DEFAULT_CURRENCY_CODE,
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { OrderCheckoutComponent } from './order-checkout/order-checkout.component';
import { OrderHeaderComponent } from './order-header/order-header.component';

@NgModule({
  declarations: [
    AppComponent,
    OrderSummaryComponent,
    OrderCheckoutComponent,
    OrderHeaderComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [{ provide: DEFAULT_CURRENCY_CODE, useValue: 'USD' }],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
