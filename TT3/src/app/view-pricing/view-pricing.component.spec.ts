import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPricingComponent } from './view-pricing.component';

describe('ViewPricingComponent', () => {
  let component: ViewPricingComponent;
  let fixture: ComponentFixture<ViewPricingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPricingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
