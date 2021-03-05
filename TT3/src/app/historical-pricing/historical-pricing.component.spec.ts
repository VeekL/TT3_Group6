import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricalPricingComponent } from './historical-pricing.component';

describe('HistoricalPricingComponent', () => {
  let component: HistoricalPricingComponent;
  let fixture: ComponentFixture<HistoricalPricingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoricalPricingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoricalPricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
