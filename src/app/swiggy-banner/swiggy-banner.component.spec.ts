import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwiggyBannerComponent } from './swiggy-banner.component';

describe('SwiggyBannerComponent', () => {
  let component: SwiggyBannerComponent;
  let fixture: ComponentFixture<SwiggyBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwiggyBannerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SwiggyBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
