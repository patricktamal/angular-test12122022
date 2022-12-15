import { Location } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderCheckoutComponent } from '../order-checkout/order-checkout.component';
import { OrderHeaderComponent } from '../order-header/order-header.component';

import { OrderSummaryComponent } from './order-summary.component';

describe('OrderSummaryComponent', () => {
  let component: OrderSummaryComponent;
  let fixture: ComponentFixture<OrderSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        OrderSummaryComponent,
        OrderHeaderComponent,
        OrderCheckoutComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(OrderSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(OrderSummaryComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain(
      'Order Summary'
    );
  });
});
